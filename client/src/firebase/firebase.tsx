// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  DocumentData,
  updateDoc,
  getDoc,
  arrayUnion,
} from 'firebase/firestore/lite';
import { StateType } from '../redux/PostSlice';

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
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export async function getDocument() {
  const ref = collection(db, 'test');
  const snapshot = await getDocs(ref);
  const list = snapshot.docs.map((doc: DocumentData) => doc.data());
  return list;
}

export async function getMusics() {
  const ref = collection(db, 'music');
  const snapshot = await getDocs(ref);
  const list = snapshot.docs.map((doc: DocumentData) => doc.data());
  return list;
}

// 곡 상세페이지, 악기 상세페이지 데이터 api
export async function getScoresByCategory(colName: string, docName: string) {
  const ref = doc(db, colName, docName);
  const snapshot = await getDoc(ref);

  if (snapshot.exists()) {
    return snapshot.data();
  }
  return {};
}

// export async function getMusic(songName: string) {
//   const ref = doc(db, 'test', songName);
//   const snapshot = await getDoc(ref);
//   console.log(snapshot.data());
//   return snapshot.data();
// }

export async function getMusicData(songName: string, data: StateType) {
  const name = `${songName}-${data.artist}`;
  const info = doc(db, 'music', name);
  const infoSnapshot = await getDoc(info);
  const savedData = infoSnapshot.data();

  const colRef = collection(db, 'music');
  const colSnap = await getDocs(colRef);

  const list = colSnap.docs.map((doc: DocumentData) => doc.data());
  // const lastIdx =
  //   colSnap.docs.map((doc: DocumentData) => doc.data()).length - 1;

  if (savedData === undefined) {
    data = { ...data };
    data.scores = [{ ...data.scores[0], scoreId: '0' }];
  } else {
    const lastScore = savedData.scores[savedData.scores.length - 1];
    const nextScoreId = parseInt(lastScore.scoreId) + 1;
    data = { ...data };
    data.scores = [{ ...data.scores[0], scoreId: nextScoreId.toString() }];
  }

  if (savedData && savedData.artist === data.artist) {
    // update
    console.log('검증 완료');
    data.scores = { ...data.scores };
    updateData(name, data);
  } else if (!infoSnapshot.exists()) {
    console.log('너 처음이구나?');
    data = { ...data };
    // data.songId = (Number(list[lastIdx].songId) + 1).toString();
    data.songId = list.length.toString();
    postData(name, data);
  }

  await savingUserPost(data);

  return infoSnapshot.data();
}

/** 해당 곡으로 만들어진 문서가 없으면 아래 함수가 작동하여 initialize 됩니다*/
async function postData(songName: string, data: StateType) {
  const infoRef = doc(db, 'music', songName);
  await setDoc(infoRef, data);

  /** instrument collection 에 추가 */
  let inst = data.scores[0].instType;

  if (inst === '피아노') {
    inst = 'piano';
  }
  if (inst === '어쿠스틱 기타') {
    inst = 'acoustic';
  }
  if (inst === '베이스') {
    inst = 'bass';
  }
  if (inst === '드럼') {
    inst = 'drum';
  }
  if (inst === '일렉 기타') {
    inst = 'electric';
  }

  const instRef = doc(db, 'instrument', inst);
  await updateDoc(instRef, { scores: arrayUnion(data.scores[0]) });
}

/** 해당 곡으로 만들어진 문서가 존재한다면 아래 함수가 작동하여 scores 배열을 업데이트 합니다 */
async function updateData(songName: string, data: StateType) {
  const infoRef = doc(db, 'music', songName);
  await updateDoc(infoRef, { scores: arrayUnion(data.scores[0]) });

  /** instrument collection 에 추가 */
  let inst = data.scores[0].instType;

  if (inst === '피아노') {
    inst = 'piano';
  }
  if (inst === '어쿠스틱 기타') {
    inst = 'acoustic';
  }
  if (inst === '베이스') {
    inst = 'bass';
  }
  if (inst === '드럼') {
    inst = 'drum';
  }
  if (inst === '일렉 기타') {
    inst = 'electric';
  }

  const instRef = doc(db, 'instrument', inst);
  await updateDoc(instRef, { scores: arrayUnion(data.scores[0]) });

  const user = auth.currentUser;

  // if (user) {
  //   const uid = user.uid;
  //   const purchasedScore = data.scores[0];
  //   const userRef = doc(db, 'user', uid);
  //   await updateDoc(userRef, { purchasedList: arrayUnion(purchasedScore) });
  // }
}

/** 악보파일 업로드 api 호출 */
export async function postPDF(file: any) {
  return new Promise<string>((resolve, reject) => {
    const storage = getStorage();
    const storageRef = ref(storage, `pdf/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    let sheetURL = '';

    uploadTask.on(
      'state_changed',
      (snapshot: any) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error: any) => {
        console.log(error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          sheetURL = downloadURL;
          resolve(sheetURL);
        });
      }
    );
  });
}

async function savingUserPost(data: StateType) {
  const user = auth.currentUser;

  if (user) {
    const uid = user.uid;
    const userRef = doc(db, 'user', uid);
    const snapshot = await getDoc(userRef);
    if (snapshot.exists()) {
      await updateDoc(userRef, { posts: arrayUnion(data.scores[0]) });
    } else {
      await setDoc(userRef, { posts: data.scores });
    }
  }
}
