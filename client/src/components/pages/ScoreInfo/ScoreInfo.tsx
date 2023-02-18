import React, { useEffect, useState } from 'react';
import { ScoreInfoHeader } from '../../UI/molecules';
import { ScoreInfoAside, ScoreInfoMain } from '../../UI/organisms';
import styles from './scoreInfo.module.scss';
import classNames from 'classnames/bind';
import { getScoreByMusic } from '../../../firebase/firebase';
import { useParams } from 'react-router';
import { ScoreInfoType } from '../Main/Main';

function ScoreInfo() {
  const cx = classNames.bind(styles);
  const [scoreData, setScoreData] = useState<ScoreInfoType>();
  const { scoreName, scoreId } = useParams();
  const dummyData = {
    scoreImg1:
      'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/if%20i%20could%20be%20a%20constellation%231.png?alt=media&token=5f6f761a-104d-4317-ad8d-03feb5c018fb',
    scoreImg2:
      'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/if%20i%20could%20be%20a%20constellation%232.png?alt=media&token=7338efea-878a-4762-a0a7-1d121e405a24',
    page: '7',
  };

  async function fetchScoreData() {
    if (scoreName && scoreId) {
      const [data] = await getScoreByMusic(scoreName, scoreId);
      setScoreData(data);
    }
  }

  useEffect(() => {
    fetchScoreData();
  }, []);
  console.log(scoreData);
  if (scoreData === undefined) {
    return <div>로딩중...</div>;
  }

  return (
    <div className={cx('scoreinfo')}>
      <div>
        <ScoreInfoHeader
          scoreName={scoreData.scoreName}
          singer={scoreData.artist}
          date={scoreData.createdAt}
        />
        <ScoreInfoMain
          scoreImg1={dummyData.scoreImg1}
          scoreImg2={dummyData.scoreImg2}
          instrument={scoreData.instType}
          difficulty={scoreData.difficulty}
          page={dummyData.page}
          scoreType={scoreData.sheetType}
          scoreExplain={scoreData.detail}
        />
      </div>
      <ScoreInfoAside
        price={scoreData.price}
        author={scoreData.author}
        profileImg={scoreData.author_profile}
      />
      <aside></aside>
    </div>
  );
}

export default ScoreInfo;
