import React from 'react';
import { Text, Button } from '../../atoms';
import styles from './songinfo.module.scss';
import classNames from 'classnames/bind';

interface SongInfoHeaderProps {
  scoreName: string;
  singer: string;
  date: string;
}

function SongInfoHeader({ scoreName, singer, date }: SongInfoHeaderProps) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('songinfo-header-wrapper')}>
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

export default SongInfoHeader;
