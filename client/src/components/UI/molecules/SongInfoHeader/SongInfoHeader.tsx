import React from 'react';
import { Text, Button } from '../../atoms';
import styles from './songinfo.module.scss';
import classNames from 'classnames/bind';

function SongInfoHeader() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('songinfo-header-wrapper')}>
      <div className={cx('text-wrapper')}>
        <Text size="txlg" weight="semibold">
          게시글제목
        </Text>
        <Text size="m">가수</Text>
        <Text size="m">작성일</Text>
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
