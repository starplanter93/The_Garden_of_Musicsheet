// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAZ4hRKbN3-Hq3w2v07pS-4KBikVP-4Wi0',
  authDomain: 'garden-of-musicsheet.firebaseapp.com',
  projectId: 'garden-of-musicsheet',
  storageBucket: 'garden-of-musicsheet.appspot.com',
  messagingSenderId: '19630033251',
  appId: '1:19630033251:web:b2170fb7c5224edff36b56',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database

export async function getDocument() {
  const ref = collection(db, 'test');
  const snapshot = await getDocs(ref);
  const list = snapshot.docs.map((doc) => doc.data());
  return list;
}

export async function getMusics() {
  const ref = collection(db, 'music');
  const snapshot = await getDocs(ref);
  const list = snapshot.docs.map((doc) => doc.data());
  return list;
}

export const auth = getAuth();

export const provider = new GoogleAuthProvider();
