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
        response = snapshot.data().isOptout;
      }
    })
    .catch((error) => {
      response = error;
      console.log(response.code);
    });

  return response;
};

export const handleRegisterUser = async (
  email: any,
  password: any,
  nickname: any
) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const ref = doc(db, 'user', user.uid);
      const snapshot = await getDoc(ref);
      if (snapshot.exists()) {
        toast.error('이미 가입한 회원이세요!');
      } else {
        userInitData(user.uid);
        updateProfile(user, {
          displayName: nickname,
          photoURL: Avatar(),
        });
        handleUserLogin(email, password);
      }
    })
    .catch((error) => {
      toast.error('이미 가입한 회원이세요!');
      console.log(error.code);
    });

  return;
};

export const handleGoogleLogin = async () => {
  let response;
  await signInWithPopup(auth, provider)
    .then((data) => {
      const credential = GoogleAuthProvider.credentialFromResult(data);
      const token = credential?.accessToken;
      const user = data.user;
      response = user;
      if (token) localStorage.setItem('authorization', token);
      if (user.refreshToken) localStorage.setItem('refresh', user.refreshToken);
    })
    .catch((err) => console.log(err));

  return response;
};
