import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth, provider } from '../../firebase/firebase';
import Avatar from '../Avatar';

export const handleUserLogin = async (email: any, password: any) => {
  let response;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem('authorization', user.uid);
      localStorage.setItem('refresh', user.refreshToken);
      response = user;
      console.log(user);
      // ...
    })

    .catch((error) => {
      response = error;
      console.log(response.code);
      // if 400 => switch and show user that the ac already exists
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
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem('authorization', user.uid);
      localStorage.setItem('refresh', user.refreshToken);
      updateProfile(user, {
        displayName: nickname,
        photoURL: Avatar(),
      });
      // ...
    })

    .catch((error) => {
      response = error;
      console.log(response.code);
      // if 400 => switch and show user that the ac already exists
    });
};

export const handleGoogleLogin = async () => {
  await signInWithPopup(auth, provider)
    .then((data) => {
      const credential = GoogleAuthProvider.credentialFromResult(data);
      const token = credential?.accessToken;
      const user = data.user;
      if (token) localStorage.setItem('authorization', token);
      if (user.refreshToken) localStorage.setItem('refresh', user.refreshToken);
    })
    .catch((err) => console.log(err));
};
