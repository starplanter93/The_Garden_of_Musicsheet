import React from 'react';
import MainSongSection from '../UI/organisms/MainSongSection/MainSongSection';
import Carousel from '../UI/organisms/Carousel/Carousel';

function Test() {
  return (
    <>
      <Carousel />
      <MainSongSection
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

export default Test;
