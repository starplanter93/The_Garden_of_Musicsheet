import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth, provider, db, userInitData } from '../../firebase/firebase';
import Avatar from '../Avatar';

import { doc, getDoc } from 'firebase/firestore/lite';
import { toast } from 'react-toastify';

export const handleUserLogin = async (email: string, password: string) => {
  let response;
  await signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const ref = doc(db, 'user', user.uid);
      const snapshot = await getDoc(ref);
      if (snapshot.exists()) {
        snapshot.data().isActive === false
          ? toast.error('탈퇴한 회원이에요!')
          : localStorage.setItem('authorization', user.uid);
        localStorage.setItem('refresh', user.refreshToken);
        response = user;
      } else {
        userInitData(user.uid);
        localStorage.setItem('authorization', user.uid);
        localStorage.setItem('refresh', user.refreshToken);
        response = user;
      }
    })
    .catch((error) => {
      response = error;
      if (response.code === 'auth/user-not-found') {
        toast.error('유저가 존재하지 않아요!');
      }

      if (response.code === 'auth/wrong-password') {
        toast.error('이메일 또는 비밀번호가 이상해요!');
      }
    });

  return response;
};

export const handleRegisterUser = async (
  email: any,
  password: any,
  nickname: any
) => {
  let response;
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const ref = doc(db, 'user', user.uid);
      const snapshot = await getDoc(ref);
      response = user;
      if (snapshot.exists()) {
        toast.error('이미 가입한 회원이세요!');
      } else {
        await userInitData(user.uid);
        await updateProfile(user, {
          displayName: nickname,
          photoURL: Avatar(),
        });
        localStorage.setItem('authorization', user.uid);
        localStorage.setItem('refresh', user.refreshToken);
        await handleUserLogin(email, password);
      }
    })
    .catch((error) => {
      console.log(error.code);
    });

  return response;
};

export const handleGoogleLogin = async () => {
  let response;
  await signInWithPopup(auth, provider)
    .then(async (data) => {
      const credential = GoogleAuthProvider.credentialFromResult(data);
      const token = credential?.accessToken;
      const user = data.user;
      const ref = doc(db, 'user', user.uid);
      const snapshot = await getDoc(ref);
      if (!snapshot.exists()) {
        userInitData(user.uid);
        updateProfile(user, {
          photoURL: Avatar(),
        });
      }
      response = user;
      if (token) localStorage.setItem('authorization', token);
      if (user.refreshToken) localStorage.setItem('refresh', user.refreshToken);
    })
    .catch((err) => console.log(err));

  return response;
};
