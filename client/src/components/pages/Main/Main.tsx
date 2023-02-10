import React from 'react';
import { MainGrid } from '../../UI/organisms';
import { Carousel } from '../../UI/organisms';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHeader } from '../../../redux/HeaderSlice';

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeader(false));
  }, []);
  return (
    <>
      <Carousel />
      <MainGrid
        songTitle="노래 제목"
        singer="가수"
        scoreName="조금길지도모르는 악보제목"
        scoreWriter="악보제작자"
        instrument="사용된 악기"
        difficulty="난이도"
        price="3,000원"
      />
    </>
  );
}

export default Main;
