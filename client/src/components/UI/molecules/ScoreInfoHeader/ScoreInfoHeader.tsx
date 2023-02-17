import React from 'react';
import { Text, Button } from '../../atoms';
import styles from './scoreinfoheader.module.scss';
import classNames from 'classnames/bind';

interface ScoreInfoHeaderProps {
  scoreName: string;
  singer: string;
  date: string;
}

function ScoreInfoHeader({ scoreName, singer, date }: ScoreInfoHeaderProps) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('songinfo-header')}>
      <div className={cx('text-wrapper')}>
        <Text size="txlg" weight="semibold">
          {scoreName}
        </Text>
        <Text size="m">{singer}</Text>
        <Text size="m">{date}</Text>
      </div>
      <div className={cx('button-wrapper')}>
        <Button theme="transparent" size="auto">
          <Text color="gray">수정</Text>
        </Button>
        <Button theme="transparent" size="auto">
          <Text color="gray">삭제</Text>
        </Button>
      </div>
    </div>
  );
}

export default ScoreInfoHeader;
