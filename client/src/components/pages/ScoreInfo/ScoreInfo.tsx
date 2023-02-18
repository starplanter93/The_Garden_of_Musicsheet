import React from 'react';
import { ScoreInfoHeader } from '../../UI/molecules';
import { ScoreInfoAside, ScoreInfoMain } from '../../UI/organisms';
import styles from './scoreInfo.module.scss';
import classNames from 'classnames/bind';
import { getScoresByMusic } from '../../../firebase/firebase';

function ScoreInfo() {
  getScoresByMusic('운이 좋았지-권진아', '0');
  const data = {
    scoreName: '악보 제목',
    singer: '가수',
    date: '작성일',
    scoreImg1:
      'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/if%20i%20could%20be%20a%20constellation%231.png?alt=media&token=5f6f761a-104d-4317-ad8d-03feb5c018fb',
    scoreImg2:
      'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/if%20i%20could%20be%20a%20constellation%232.png?alt=media&token=7338efea-878a-4762-a0a7-1d121e405a24',
    instrument: '어쿠스틱 기타',
    difficulty: '어려움',
    page: '7',
    scoreType: '타브 악보',
    scoreExplain:
      '게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보 게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보',
    price: '3000',
    author: '97세기타마스터박춘식',
    profileImg:
      'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/avatar%2Favatar1.png?alt=media&token=a10690ce-65fd-402c-8e3f-b520188a8ba1',
  };
  const cx = classNames.bind(styles);
  return (
    <div className={cx('scoreinfo')}>
      <div>
        <ScoreInfoHeader
          scoreName={data.scoreName}
          singer={data.singer}
          date={data.date}
        />
        <ScoreInfoMain
          scoreImg1={data.scoreImg1}
          scoreImg2={data.scoreImg2}
          instrument={data.instrument}
          difficulty={data.difficulty}
          page={data.page}
          scoreType={data.scoreType}
          scoreExplain={data.scoreExplain}
        />
      </div>
      <ScoreInfoAside
        price={data.price}
        author={data.author}
        profileImg={data.profileImg}
      />
      <aside></aside>
    </div>
  );
}

export default ScoreInfo;
