import React from 'react';
import styles from './scorepreview.module.scss';
import classNames from 'classnames/bind';

interface ScorePreviewProps {
  scoreImg1: string;
  scoreImg2: string;
}

function ScorePreview({ scoreImg1, scoreImg2 }: ScorePreviewProps) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('score-preview-wrapper')}>
      <img alt="score-preview1" src={scoreImg1} />
      <img alt="score-preview2" src={scoreImg2} />
    </div>
  );
}

export default ScorePreview;
