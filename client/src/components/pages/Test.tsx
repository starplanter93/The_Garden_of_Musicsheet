import React from 'react';
import {
  ScoreInfoHeader,
  ScorePreview,
  ScoreInfoCard,
  ScoreInfoExplain,
} from '../UI/molecules';
import { ScoreInfoAside } from '../UI/organisms';

function Test() {
  const data = {
    scoreExplain: '게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보',
    price: '3000',
    author: '97세기타마스터박춘식',
    profileImg:
      'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/avatar%2Favatar1.png?alt=media&token=a10690ce-65fd-402c-8e3f-b520188a8ba1',
  };
  return (
    <>
      <ScoreInfoHeader scoreName="악보 제목" singer="가수" date="작성일" />
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
      <ScoreInfoExplain scoreExplain="게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보" />
      <ScoreInfoAside
        price={data.price}
        author={data.author}
        profileImg={data.profileImg}
      />
    </>
  );
}

export default Test;
