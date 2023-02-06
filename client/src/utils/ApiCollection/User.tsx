import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const handleUserLogin = (email: any, password: any) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
      // ...
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // if 400 => switch and show user that the ac already exists
    });
};

export const handleRegisterUser = (
  email: any,
  password: any,
  nickname: any
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      updateProfile(user, { displayName: nickname });
      return user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorCode;
      // if 400 => switch and show user that the ac already exists
    });
};
