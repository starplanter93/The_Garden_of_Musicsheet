import React from 'react';
import styles from './songtitle.module.scss';
import { ImgLayout, Text, Button } from '../../atoms';
import classnames from 'classnames/bind';

interface SongTitleProps {
  songtitle: string;
  singer: string;
}

function SongTitle({ songtitle, singer }: SongTitleProps) {
  const cx = classnames.bind(styles);
  return (
    <div className={cx('songtitle-wrapper')}>
      <ImgLayout shape="square" size="m" alt="album-cover" />
      <div className={cx('songtext-wrapper')}>
        <Text size="lg" weight="regular" color="black">
          {songtitle}
        </Text>
        <Text size="m" weight="regular" color="black">
          {singer}
        </Text>
      </div>
      <Button theme="tertiary" size="auto">
        <Text size="s" weight="regular" color="gray">
          더보기 &gt;
        </Text>
      </Button>
    </div>
  );
}

export default SongTitle;
