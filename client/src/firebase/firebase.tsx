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
  writeBatch,
  query,
  limit,
  orderBy,
  startAfter,
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

/** 장바구니에 악보 추가 */
export async function updateCart(scoreInfo: ScoreInfoType) {
  if (auth.currentUser !== null) {
    const userInfoRef = doc(db, 'user', auth.currentUser.uid);
    await updateDoc(userInfoRef, { cartItems: arrayUnion(scoreInfo) });
    const snapshot = await getDoc(userInfoRef);
    if (snapshot.exists()) {
      return snapshot.data();
    }
  }
}

/** 장바구니에 담은 악보 get */
export async function getCart(uid: string) {
  if (uid !== null) {
    const userInfoRef = doc(db, 'user', uid);
    const snapshot = await getDoc(userInfoRef);
    if (snapshot.exists()) {
      return snapshot.data();
    }
  }
}

/** 장바구니에서 악보 delete */
export async function deleteCartItem(scoreId: string) {
  if (auth.currentUser !== null) {
    const userInfoRef = doc(db, 'user', auth.currentUser.uid);
    const snapshot = await getDoc(userInfoRef);
    if (snapshot.exists()) {
      const deletedCartList = snapshot
        .data()
        .cartItems.filter((cartItem: ScoreInfoType) => {
          return cartItem.scoreId !== scoreId;
        });
      await updateDoc(userInfoRef, { cartItems: deletedCartList });
      return deletedCartList;
    }
  }
}

/** 장바구니에서 악보 구매 */
export async function purchaseCartItems(
  cartItems: ScoreInfoType[],
  totalPrice: number
) {
  if (auth.currentUser !== null) {
    const userInfoRef = doc(db, 'user', auth.currentUser.uid);
    const snapshot = await getDoc(userInfoRef);
    let calculatedCash;
    if (snapshot.exists()) {
      calculatedCash = parseInt(snapshot.data().cash) - totalPrice;
    }
    await updateDoc(userInfoRef, {
      cash: calculatedCash,
      purchasedScores: arrayUnion(...cartItems),
      cartItems: [],
    });
  }
}

/** 구입한 악보리스트 불러오기 */
export async function getPurchasedScores() {
  if (auth.currentUser !== null) {
    const userInfoRef = doc(db, 'user', auth.currentUser.uid);
    const snapshot = await getDoc(userInfoRef);
    if (snapshot.exists()) {
      return snapshot.data().purchasedScores;
    }
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

export async function getMusicData(songName: string, data: StateType) {
  const name = `${songName}-${data.artist}`;
  const info = doc(db, 'music', name);
  const infoSnapshot = await getDoc(info);
  const savedData = infoSnapshot.data();

  const colRef = collection(db, 'music');
  const colSnap = await getDocs(colRef);

  const list = colSnap.docs.map((doc: DocumentData) => doc.data());

  const scoreId = list
    .reduce((acc, curr) => acc + curr.scores.length, 0)
    .toString();
  data = { ...data, isDeleted: false };
  data.scores = [{ ...data.scores[0], scoreId }];

  if (savedData && savedData.artist === data.artist) {
    // update
    data.scores = { ...data.scores };
    updateData(name, data);
  } else if (!infoSnapshot.exists()) {
    data = { ...data };
    data.songId = list.length.toString();
    postData(name, data);
  }

  await savingUserPost(data);

  return scoreId;
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
  await updateDoc(infoRef, {
    scores: arrayUnion(data.scores[0]),
    isDeleted: false,
  });

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
  await setDoc(ref, { cash: '1000000', isActive: true, cartItems: [] });

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
    if (posts === undefined) {
      return;
    } else {
      const scoresWithId = posts.filter((obj: Score) => obj.authorId === uid);
      scoresWithId.forEach((obj: Score) => (obj.author = newName));
      await updateDoc(userRef, { posts: posts });
    }
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

  const instArr = instList
    .map((el) => el.scores)
    .filter((el) => el !== undefined);

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
    if (posts !== undefined) {
      const scoresWithId = posts.filter((obj: Score) => obj.authorId === uid);
      scoresWithId.forEach((obj: Score) => (obj.author_profile = image));
      await updateDoc(userRef, { posts: posts });
    }
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
  const batch = writeBatch(db);

  // User collection
  const userRef = doc(db, 'user', uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const { posts } = userSnap.data();
    if (posts !== undefined) {
      const scoresWithId = posts.filter((obj: Score) => obj.authorId === uid);
      scoresWithId.forEach((obj: Score) => (obj.isOptout = true));

      batch.update(userRef, { posts, isActive: false });
    } else {
      batch.update(userRef, { isActive: false });
    }
  }

  // Music collection
  const musicRef = collection(db, 'music');
  const musicSnap = await getDocs(musicRef);

  for (const musicDoc of musicSnap.docs) {
    const { scores } = musicDoc.data();
    const scoresWithId = scores.filter((obj: Score) => obj.authorId === uid);
    scoresWithId.forEach((obj: Score) => (obj.isOptout = true));

    const updatedScores = [...scores, ...scoresWithId];
    const isDeleted = updatedScores.every((score: Score) => score.isOptout);

    batch.update(musicDoc.ref, { scores: updatedScores, isDeleted });
  }

  // Instrument collection
  const instRef = collection(db, 'instrument');
  const instSnap = await getDocs(instRef);

  for (const instDoc of instSnap.docs) {
    const { scores } = instDoc.data();

    if (!scores) {
      continue;
    }

    const scoresWithId = scores.filter((obj: Score) => obj.authorId === uid);
    scoresWithId.forEach((obj: Score) => (obj.isOptout = true));

    const instType = scoresWithId
      .map(({ instType }: Score) => {
        switch (instType) {
          case '피아노':
            return 'piano';
          case '어쿠스틱 기타':
            return 'acoustic';
          case '베이스':
            return 'bass';
          case '드럼':
            return 'drum';
          case '일렉 기타':
            return 'electric';
          default:
            return null;
        }
      })
      .filter((inst: Array<string>) => inst !== null);

    if (instType.length > 0) {
      const infoRefs = instType.map((inst: string) =>
        doc(db, 'instrument', inst)
      );

      const updatedScores = [...scores, ...scoresWithId];
      const isDeleted = updatedScores.every((score: Score) => score.isOptout);

      for (let i = 0; i < infoRefs.length; i++) {
        batch.update(infoRefs[i], { scores: updatedScores, isDeleted });
      }
    }
  }

  await batch.commit();
}

// 유저가 게시글을 삭제하면, 해당 게시글의 id를 바탕으로 모든 컬렉션의 scores, posts의 isDeleted 값을 true로 만들어줌
export async function deleteArticle(uid: string, scoreId: string) {
  const userRef = doc(db, 'user', uid);
  const musicRef = collection(db, 'music');
  const instrumentRef = collection(db, 'instrument');

  const [userSnap, musicSnap, instrumentSnap] = await Promise.all([
    getDoc(userRef),
    getDocs(musicRef),
    getDocs(instrumentRef),
  ]);

  const batch = writeBatch(db);

  // Update user collection
  if (userSnap.exists()) {
    const { posts } = userSnap.data();
    const updatedPosts = posts.map((post: Score) => {
      if (post.scoreId === scoreId) {
        return { ...post, isDeleted: true };
      }
      return post;
    });
    batch.update(userRef, { posts: updatedPosts });
  }

  // Update music collection
  for (const doc of musicSnap.docs) {
    const music = doc.data();
    const updatedScores = music.scores.map((score: Score) => {
      if (score.scoreId === scoreId) {
        return { ...score, isDeleted: true };
      }
      return score;
    });
    batch.update(doc.ref, { scores: updatedScores });
    // music collection의 해당 악보들의 isDeleted 값이 전부 true라면
    if (
      updatedScores.every((score: Score) => score.isDeleted || score.isOptout)
    ) {
      batch.update(doc.ref, { isDeleted: true });
    } else {
      batch.update(doc.ref, { isDeleted: false });
    }
  }

  // Update instrument collection
  for (const doc of instrumentSnap.docs) {
    const inst = doc.data();
    if (inst.scores !== undefined) {
      const updatedScores = inst.scores.map((score: Score) => {
        if (score.scoreId === scoreId) {
          return { ...score, isDeleted: true };
        }
        return score;
      });
      batch.update(doc.ref, { scores: updatedScores });
    }
  }

  await batch.commit();
}

export async function getUserCash(uid: string) {
  const ref = doc(db, 'user', uid);
  const snapshot = await getDoc(ref);

  if (snapshot.exists()) {
    const cash = snapshot.data().cash;
    return cash;
  }
}

export async function syncUserData() {
  //uid 를 인자로 받아서 해당 인자로 구성된 music score 를 찾아내어 하나로 만들고 user Table 로 푸시
  const uid = 'RyoN30gCa9gFF8o1nxKLD36vd892';
  const ref = collection(db, 'music');
  const snapshot = await getDocs(ref);
  const list = snapshot.docs.map((doc: DocumentData) => doc.data());

  const syncArr = [];

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].scores.length; j++) {
      if (list[i].scores[j].authorId === uid) {
        const score = list[i].scores[j];
        const songName = `${score.songName}-${score.artist}`;
        const infoRef = doc(db, 'music', songName);
        const snapshot = await getDoc(infoRef);

        if (snapshot.exists()) {
          const { scores } = snapshot.data();
          const scoresWithId = scores.filter(
            (obj: Score) => obj.authorId === uid
          );
          syncArr.push(scoresWithId[0]);
        }
      }
    }
  }

  const testRef = doc(db, 'user', uid);
  const testSnap = await getDoc(testRef);

  if (testSnap.exists()) {
    await updateDoc(testRef, { posts: syncArr });
  }
}

export async function getMainPageData() {
  const queryRef = query(
    collection(db, 'music'),
    orderBy('songId'), // 최신 작성순으로 정렬
    limit(8)
  );
  try {
    const snap = await getDocs(queryRef);
    const docsArray = snap.docs.map((doc: DocumentData) => doc.data());
    return { docsArray, key: snap.docs[snap.docs.length - 1] };
  } catch (err) {
    console.log(err);
  }
}

export async function getMoreMainData(key: DocumentData) {
  if (key !== undefined) {
    const queryRef = query(
      collection(db, 'music'),
      orderBy('songId'),
      startAfter(key), // 마지막 커서 기준으로 추가 요청을 보내도록 쿼리 전송
      limit(6)
    );
    try {
      if (queryRef !== undefined) {
        const snap = await getDocs(queryRef);
        const docsArray = snap.docs.map((doc: DocumentData) => doc.data());
        if (snap.empty) {
          return { docsArray, noMore: snap.empty };
        } else
          return {
            docsArray,
            key: snap.docs[snap.docs.length - 1],
            noMore: snap.empty,
          };
      }
    } catch (err) {
      console.log(err);
    }
  }
}
