import React from 'react';
import { SongInfoHeader, ScorePreview, ScoreInfoCard } from '../UI/molecules';

function Test() {
  return (
    <>
      <SongInfoHeader scoreName="악보 제목" singer="가수" date="작성일" />
      <ScorePreview
        scoreImg1="https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/if%20i%20could%20be%20a%20constellation%231.png?alt=media&token=5f6f761a-104d-4317-ad8d-03feb5c018fb"
        scoreImg2="https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/if%20i%20could%20be%20a%20constellation%232.png?alt=media&token=7338efea-878a-4762-a0a7-1d121e405a24"
      />
      <ScoreInfoCard
        instrument="어쿠스틱 기타"
        difficulty="어려움"
        page="7"
        scoreType="타브 악보"
      />
    </>
  );
}

export default Test;
