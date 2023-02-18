import React from 'react';
import classNames from 'classnames/bind';
import styles from './scoreinfoexplain.module.scss';

interface ScoreInfoExplainProps {
  scoreExplain: string;
}

function ScoreInfoExplain({ scoreExplain }: ScoreInfoExplainProps) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('score-explain')}>
      <div dangerouslySetInnerHTML={{ __html: scoreExplain }}></div>
    </div>
  );
}

export default ScoreInfoExplain;
