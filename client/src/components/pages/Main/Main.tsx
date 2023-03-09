import React, { useEffect, useState, useCallback, useRef } from 'react';
import { MainGrid, Carousel } from '../../UI/organisms';
import { DocumentData } from 'firebase/firestore/lite';
import classNames from 'classnames/bind';
import styles from './main.module.scss';
import { useDispatch } from 'react-redux';
import { showFooter } from '../../../redux/FooterSlice';
import Spinner from '../../../utils/Spinner/Spinner';
import { getMainPageData, getMoreMainData } from '../../../firebase/firebase';

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
  isOptout: boolean;
}

function Main() {
  const cx = classNames.bind(styles);

  const [musicArr, setMusicArr] = useState<MusicData>([]);
  const [key, setKey] = useState<DocumentData>(); // 마지막으로 불러온 스냅샷 상태
  const [noMore, setNoMore] = useState(false); // 추가로 요청할 데이터 없다는 flag
  const target = useRef() as React.MutableRefObject<HTMLDivElement>;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(showFooter(noMore));
  }, [noMore]);

  useEffect(() => {
    getMainPageData().then((data) => {
      data && setMusicArr(data.docsArray);
      data && setKey(data.key);
    });
    setLoading(false);
  }, []);

  const loadMore = useCallback(async () => {
    if (key) {
      await getMoreMainData(key).then((data) => {
        data && setMusicArr([...musicArr, ...data.docsArray]);
        data && setNoMore(data.noMore);
        data?.key && setKey(data.key);
      });
    }
  }, [musicArr, key]);

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
      {!loading ? <MainGrid musicData={musicArr} /> : <Spinner />}
      <div className={cx('target')} ref={target}></div>
    </>
  );
}

export default Main;
