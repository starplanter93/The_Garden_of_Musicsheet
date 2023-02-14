import React from 'react';
import { Text } from '../../atoms';
import classNames from 'classnames/bind';
import styles from './scoreinfoexplain.module.scss';

interface ScoreInfoExplainProps {
  scoreExplain: string;
}

function ScoreInfoExplain({ scoreExplain }: ScoreInfoExplainProps) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('score-explain-wrapper')}>
      <Text>{scoreExplain}</Text>
    </div>
  );
}

export default ScoreInfoExplain;
