import React from 'react';
import MainScoreList from '../UI/molecules/MainScoreList/MainScoreList';
import SongTitle from '../UI/molecules/SongTitle/SongTitle';

function Test() {
  return (
    <>
      <SongTitle songtitle="사건의지평선" singer="윤하" />
      <MainScoreList
        scoreName="사건의지평선(ver.easy)"
        songInfo="abc / 어쿠스틱 기타 / 보통"
        price="3,000원"
      />
    </>
  );
}

export default Test;
