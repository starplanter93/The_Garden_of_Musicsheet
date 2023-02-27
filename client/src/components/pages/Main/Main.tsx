import React, { useEffect, useState, useCallback, useRef } from 'react';
import { MainGrid } from '../../UI/organisms';
import { Carousel } from '../../UI/organisms';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  DocumentData,
} from 'firebase/firestore/lite';

import classNames from 'classnames/bind';
import styles from './main.module.scss';
import { useDispatch } from 'react-redux';
import { showFooter } from '../../../redux/FooterSlice';
import Spinner from '../../../utils/Spinner/Spinner';

export type MusicData = {
  artist: string;
  scores: ScoreInfoType[];
  albumImg: string;
  songName: string;
  songId: number | null;
  isDeleted: boolean;
}[];

export interface ScoreInfoType {
  albumImg: string;
  artist: string;
  author: string;
  authorId: string;
  author_profile: string;
  createdAt: string;
  detail: string;
  difficulty: string;
  downloadURL: string;
  instType: string;
  price: string;
  scoreId: string;
  scoreName: string;
  sheetType: string;
  songName: string;
  youtubeURL: string;
  isDeleted: boolean;
}

function Main() {
  const cx = classNames.bind(styles);

  const [musicArr, setMusicArr] = useState<MusicData>([]);
  const [key, setKey] = useState<DocumentData>(); // 마지막으로 불러온 스냅샷 상태
  const [noMore, setNoMore] = useState(false); // 추가로 요청할 데이터 없다는 flag
  const target = useRef() as React.MutableRefObject<HTMLDivElement>;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(showFooter(noMore));
  }, [noMore]);

  const firebaseConfig = {
    apiKey: 'AIzaSyAZ4hRKbN3-Hq3w2v07pS-4KBikVP-4Wi0',
    authDomain: 'garden-of-musicsheet.firebaseapp.com',
    projectId: 'garden-of-musicsheet',
    storageBucket: 'garden-of-musicsheet.appspot.com',
    messagingSenderId: '19630033251',
    appId: '1:19630033251:web:b2170fb7c5224edff36b56',
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const getFirstPage = useCallback(async () => {
    const queryRef = query(
      collection(db, 'music'),
      orderBy('songId'), // 최신 작성순으로 정렬
      limit(8)
    );
    try {
      const snap = await getDocs(queryRef);
      const docsArray = snap.docs.map((doc: DocumentData) => doc.data());
      // 문서 저장
      setMusicArr(docsArray);
      setLoading(!loading);
      // 커서로 사용할 마지막 문서 스냅샷 저장
      setKey(snap.docs[snap.docs.length - 1]);
    } catch (err) {
      console.log(err);
    }
  }, []);
  // 추가 요청 함수
  const loadMore = useCallback(async () => {
    let queryRef;
    if (key !== undefined) {
      queryRef = query(
        collection(db, 'music'),
        orderBy('songId'),
        startAfter(key), // 마지막 커서 기준으로 추가 요청을 보내도록 쿼리 전송
        limit(6)
      );
    }
    try {
      let snap;
      if (queryRef !== undefined) {
        snap = await getDocs(queryRef);
        snap.empty
          ? setNoMore(true) // 만약 스냅샷이 존재 하지 않는다면 더이상 불러올수 없다는 flag 설정
          : setKey(snap.docs[snap.docs.length - 1]); // 존재한다면 처음과 마찬가지고 마지막 커서 저장
        const docsArray = snap.docs.map((doc: DocumentData) => doc.data());
        setMusicArr([...musicArr, ...docsArray]); // 기존 데이터와 합쳐서 상태 저장
      }
    } catch (err) {
      console.log(err);
    }
  }, [musicArr, key]);

  console.log(musicArr);

  // 지정된 요소가 화면에 보일때 실행할 콜백함수
  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      // 만약에 지정한 요소가 화면에 보이거나 현재 데이터를 더 불러오는 상황이 아닐경우,
      // 기존 요소의 주시를 해체하고 추가로 3개의 문서를 더 불러오도록 설정
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        await loadMore();
      }
    },
    [loadMore]
  );

  useEffect(() => {
    getFirstPage();
  }, [getFirstPage]);

  // target 요소의 ref가 전달되었을때 해당 요소를 주시할수 있도록 observer 인스턴스 생성후 전달
  useEffect(() => {
    let observer: IntersectionObserver;
    if (target && !noMore) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0,
      });
      observer.observe(target.current);
    }
    // 메모리 해제 작업
    return () => {
      observer && observer.disconnect();
    };
  }, [target, onIntersect, noMore]);

  return (
    <>
      <Carousel />
      {loading ? (
        <>
          <MainGrid musicData={musicArr} />
        </>
      ) : (
        <Spinner />
      )}
      <div className={cx('target')} ref={target}></div>
    </>
  );
}

export default Main;
