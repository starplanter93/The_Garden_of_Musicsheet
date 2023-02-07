import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase';

export const handleUserLogin = async (email: any, password: any) => {
  let response;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem('authorization', user.uid);
      localStorage.setItem('refresh', user.refreshToken);
      response = user;
      // ...
    })

    .catch((error) => {
      response = error;
      console.log(response.code);
      // if 400 => switch and show user that the ac already exists
    });

  return response;
};

export const handleRegisterUser = (
  email: any,
  password: any,
  nickname: any
) => {
  let response;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      updateProfile(user, {
        displayName: nickname,
        photoURL:
          'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/avatar%2Favatar1.png?alt=media&token=a10690ce-65fd-402c-8e3f-b520188a8ba1',
      });
      // ...
    })

    .catch((error) => {
      response = error;
      console.log(response.code);
      // if 400 => switch and show user that the ac already exists
    });
};
