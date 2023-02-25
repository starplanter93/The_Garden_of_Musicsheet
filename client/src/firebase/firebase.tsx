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
  DocumentReference,
} from 'firebase/firestore/lite';
import { Score, StateType } from '../redux/PostSlice';
import { ScoreInfoType } from '../components/pages/Main/Main';

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
export const db = getFirestore(app);

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

export async function getScoreByMusic(docName: string, scoreId: string) {
  const ref = doc(db, 'music', docName);
  const snapshot = await getDoc(ref);
  if (snapshot.exists()) {
    const scoreData = snapshot.data().scores.filter((score: ScoreInfoType) => {
      return score.scoreId === scoreId;
    });
    return scoreData;
  }
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
    console.log(savedData.scores);
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

export async function postProfilePicture(uid: string, file: any) {
  return new Promise<string>((resolve, reject) => {
    const storage = getStorage();
    const storageRef = ref(storage, `profile/${uid}/${file.name}`);

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

export async function getUserArticle(uid: string) {
  const ref = doc(db, 'user', uid);
  const snapshot = await getDoc(ref);

  return snapshot.data();
}

export async function userInitData(uid: string) {
  const ref = doc(db, 'user', uid);
  const snapshot = await getDoc(ref);
  await setDoc(ref, { cash: '1000000', isActive: true });

  return snapshot.data();
}

/** 게시글 수정 api */
export async function updateScore(data: StateType, scoreId: string) {
  /** 업데이트된 scores 배열을 반환합니다 */
  const editedScores = async (ref: DocumentReference<DocumentData>) => {
    const snapshot = await getDoc(ref);

    if (snapshot.exists()) {
      const scoresData: ScoreInfoType[] = await (snapshot.data().scores ??
        snapshot.data().posts);
      const filteredData = scoresData.filter(
        (score: ScoreInfoType) => score.scoreId !== scoreId
      );
      const updatedScore = { ...data.scores[0], scoreId };
      return [...filteredData, updatedScore];
    }
  };

  /** 한글명 악기타입을 영문으로 변환합니다 */
  const convertDocName = (instType: string) => {
    const instrumnetList = [
      ['피아노', 'piano'],
      ['일렉 기타', 'electric'],
      ['어쿠스틱 기타', 'acoustic'],
      ['베이스', 'bass'],
      ['드럼', 'drum'],
    ];
    const convertedName = instrumnetList.filter(
      (el) => el[0] === instType
    )[0][1];

    return convertedName;
  };

  // update music
  const docName = `${data.songName}-${data.artist}`;
  const musicRef = doc(db, 'music', docName);
  const updatedMusicScores = await editedScores(musicRef);
  await updateDoc(musicRef, { scores: updatedMusicScores });

  // update instrument
  const instDocName = convertDocName(data.scores[0].instType);
  const instRef = doc(db, 'instrument', instDocName);
  const updatedInstScores = await editedScores(instRef);
  await updateDoc(instRef, { scores: updatedInstScores });

  // update user
  const userDocName = `${data.scores[0].authorId}`;
  const userRef = doc(db, 'user', userDocName);
  const updatedUserScores = await editedScores(userRef);
  await updateDoc(userRef, { posts: updatedUserScores });
}

export async function updateUserName(uid: string, newName: string) {
  /** user 컬렉션 수정 */
  const userRef = doc(db, 'user', uid);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    const { posts } = userSnap.data();
    const scoresWithId = posts.filter((obj: Score) => obj.authorId === uid);
    scoresWithId.forEach((obj: Score) => (obj.author = newName));
    await updateDoc(userRef, { posts: posts });
  }

  /** music 컬렉션 수정*/
  const musicRef = collection(db, 'music');
  const musicSnap = await getDocs(musicRef);
  const musicList = musicSnap.docs.map((doc: DocumentData) => doc.data());
  const musicArr = musicList.map((el) => el.scores);

  for (let i = 0; i < musicArr.length; i++) {
    for (let j = 0; j < musicArr[i].length; j++) {
      if (musicArr[i][j].authorId === uid) {
        const songName = `${musicArr[i][j].songName}-${musicArr[i][j].artist}`;
        const infoRef = doc(db, 'music', songName);
        const snapshot = await getDoc(infoRef);

        if (snapshot.exists()) {
          const { scores } = snapshot.data();
          const scoresWithId = scores.filter(
            (obj: Score) => obj.authorId === uid
          );
          scoresWithId.forEach((obj: Score) => (obj.author = newName));

          await updateDoc(infoRef, { scores: scores });
        }
      }
    }
  }

  /** instrument 컬렉션 수정*/
  const instRef = collection(db, 'instrument');
  const instSnap = await getDocs(instRef);
  const instList = instSnap.docs.map((doc: DocumentData) => doc.data());

  const instArr = instList.map((el) => el.scores);

  for (let i = 0; i < instArr.length; i++) {
    for (let j = 0; j < instArr[i].length; j++) {
      if (instArr[i][j].authorId === uid) {
        const data = instArr[i][j];
        let inst = data.instType;
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

        const infoRef = doc(db, 'instrument', inst);
        const snapshot = await getDoc(infoRef);

        if (snapshot.exists()) {
          const { scores } = snapshot.data();
          const scoresWithId = scores.filter(
            (obj: Score) => obj.authorId === uid
          );
          scoresWithId.forEach((obj: Score) => (obj.author = newName));

          await updateDoc(infoRef, { scores: scores });
        }
      }
    }
  }

  return userSnap.data();
}

// 유저가 프사를 바꾸면 일단 storage에 업로드를 하고 해당 주소를 리턴으로 받아오는게 선행되어야 함
export async function updateUserPicture(uid: string, image: string) {
  /** user 컬렉션 수정 */
  const userRef = doc(db, 'user', uid);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    const { posts } = userSnap.data();
    const scoresWithId = posts.filter((obj: Score) => obj.authorId === uid);
    scoresWithId.forEach((obj: Score) => (obj.author_profile = image));
    await updateDoc(userRef, { posts: posts });
  }

  /** music 컬렉션 수정*/
  const musicRef = collection(db, 'music');
  const musicSnap = await getDocs(musicRef);
  const musicList = musicSnap.docs.map((doc: DocumentData) => doc.data());
  const musicArr = musicList.map((el) => el.scores);

  for (let i = 0; i < musicArr.length; i++) {
    for (let j = 0; j < musicArr[i].length; j++) {
      if (musicArr[i][j].authorId === uid) {
        const songName = `${musicArr[i][j].songName}-${musicArr[i][j].artist}`;
        const infoRef = doc(db, 'music', songName);
        const snapshot = await getDoc(infoRef);

        if (snapshot.exists()) {
          const { scores } = snapshot.data();
          const scoresWithId = scores.filter(
            (obj: Score) => obj.authorId === uid
          );
          scoresWithId.forEach((obj: Score) => (obj.author_profile = image));

          await updateDoc(infoRef, { scores: scores });
        }
      }
    }
  }

  /** instrument 컬렉션 수정*/
  const instRef = collection(db, 'instrument');
  const instSnap = await getDocs(instRef);
  const instList = instSnap.docs.map((doc: DocumentData) => doc.data());

  const instArr = instList.map((el) => el.scores);

  for (let i = 0; i < instArr.length; i++) {
    for (let j = 0; j < instArr[i].length; j++) {
      if (instArr[i][j].authorId === uid) {
        const data = instArr[i][j];
        let inst = data.instType;
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

        const infoRef = doc(db, 'instrument', inst);
        const snapshot = await getDoc(infoRef);

        if (snapshot.exists()) {
          const { scores } = snapshot.data();
          const scoresWithId = scores.filter(
            (obj: Score) => obj.authorId === uid
          );
          scoresWithId.forEach((obj: Score) => (obj.author_profile = image));

          await updateDoc(infoRef, { scores: scores });
        }
      }
    }
  }

  return userSnap.data();
}

// 유저가 회원탈퇴를 진행하면 music, inst, user 컬렉션 내에 모든 scores,posts 의 isOptout 값을 true로 만들어줌
export async function userOptout(uid: string) {
  /** user 컬렉션 수정 */

  const userRef = doc(db, 'user', uid);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    const { posts } = userSnap.data();
    const scoresWithId = posts.filter((obj: Score) => obj.authorId === uid);
    scoresWithId.forEach((obj: Score) => (obj.isOptout = true));
    await updateDoc(userRef, { posts: posts, isActive: false });
  }
  /** music 컬렉션 수정*/
  const musicRef = collection(db, 'music');
  const musicSnap = await getDocs(musicRef);
  const musicList = musicSnap.docs.map((doc: DocumentData) => doc.data());
  const musicArr = musicList.map((el) => el.scores);

  for (let i = 0; i < musicArr.length; i++) {
    for (let j = 0; j < musicArr[i].length; j++) {
      if (musicArr[i][j].authorId === uid) {
        const songName = `${musicArr[i][j].songName}-${musicArr[i][j].artist}`;
        const infoRef = doc(db, 'music', songName);
        const snapshot = await getDoc(infoRef);

        if (snapshot.exists()) {
          const { scores } = snapshot.data();
          const scoresWithId = scores.filter(
            (obj: Score) => obj.authorId === uid
          );
          scoresWithId.forEach((obj: Score) => (obj.isOptout = true));

          await updateDoc(infoRef, { scores: scores });
        }
      }
    }
  }
  /** instrument 컬렉션 수정*/
  const instRef = collection(db, 'instrument');
  const instSnap = await getDocs(instRef);
  const instList = instSnap.docs.map((doc: DocumentData) => doc.data());

  const instArr = instList.map((el) => el.scores);

  for (let i = 0; i < instArr.length; i++) {
    for (let j = 0; j < instArr[i].length; j++) {
      if (instArr[i][j].authorId === uid) {
        const data = instArr[i][j];
        let inst = data.instType;
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

        const infoRef = doc(db, 'instrument', inst);
        const snapshot = await getDoc(infoRef);

        if (snapshot.exists()) {
          const { scores } = snapshot.data();
          const scoresWithId = scores.filter(
            (obj: Score) => obj.authorId === uid
          );
          scoresWithId.forEach((obj: Score) => (obj.isOptout = true));

          await updateDoc(infoRef, { scores: scores });
        }
      }
    }
  }
}

export async function getUserCash(uid: string) {
  const ref = doc(db, 'user', uid);
  const snapshot = await getDoc(ref);

  if (snapshot.exists()) {
    return snapshot.data();
  }
}

export async function syncUserData() {
  const ref = collection(db, 'music');
  const snapshot = await getDocs(ref);
  const list = snapshot.docs.map((doc: DocumentData) => doc.data());

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].scores.length; j++) {
      if (list[i].scores[j].author === '연수동 꿀성대 준일') {
        const score = list[i].scores[j];
        console.log(score.author);
        const songName = `${score.songName}-${score.artist}`;
        const infoRef = doc(db, 'music', songName);
        const snapshot = await getDoc(infoRef);
        // const songName = `${list[i][j].songName}-${list[i][j].artist}`;

        if (snapshot.exists()) {
          const { scores } = snapshot.data();
          // console.log(scores);
          // const scoresWithId = scores.filter(
          //   (obj: Score) => obj.authorId === uid
          // );
        }
        // scoresWithId.forEach((obj: Score) => (obj.isOptout = true));

        // await updateDoc(infoRef, { scores: scores });
      }
    }
  }
}
