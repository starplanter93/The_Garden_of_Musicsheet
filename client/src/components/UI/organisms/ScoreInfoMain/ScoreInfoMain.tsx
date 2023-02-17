import React from 'react';
import { ScorePreview, ScoreInfoCard, ScoreInfoExplain } from '../../molecules';
import styles from './scoreInfoMain.module.scss';
import classNames from 'classnames/bind';

interface ScoreInfoMainProps {
  scoreImg1: string;
  scoreImg2: string;
  instrument: string;
  difficulty: string;
  page: string;
  scoreType: string;
  scoreExplain: string;
}

function ScoreInfoMain({
  scoreImg1,
  scoreImg2,
  instrument,
  difficulty,
  page,
  scoreType,
  scoreExplain,
}: ScoreInfoMainProps) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('scoreinfo-main')}>
      <ScorePreview scoreImg1={scoreImg1} scoreImg2={scoreImg2} />
      <ScoreInfoCard
        instrument={instrument}
        difficulty={difficulty}
        page={page}
        scoreType={scoreType}
      />
      <ScoreInfoExplain scoreExplain={scoreExplain} />
    </div>
  );
}

export default ScoreInfoMain;
