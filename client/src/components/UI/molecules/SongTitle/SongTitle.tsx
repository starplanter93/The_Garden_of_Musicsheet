import React from 'react';
import styles from './songtitle.module.scss';
import { ImgLayout, Text, Button } from '../../atoms';
import classnames from 'classnames/bind';

interface SongTitleProps {
  albumImg?: string;
  songTitle: string;
  singer: string;
}

function SongTitle({ albumImg, songTitle, singer }: SongTitleProps) {
  const cx = classnames.bind(styles);
  return (
    <div className={cx('songtitle-wrapper')}>
      <a className={cx('albumimg-wrapper')}>
        <ImgLayout src={albumImg} shape="square" size="m" alt="album-cover" />
      </a>
      <a className={cx('song-info')}>
        <Text size="lg" weight="regular" color="black">
          {songTitle}
        </Text>
        <Text size="m" weight="regular" color="black">
          {singer}
        </Text>
      </a>
      <Button theme="tertiary" size="auto">
        <Text size="s" weight="regular" color="gray">
          더보기 &gt;
        </Text>
      </Button>
    </div>
  );
}

export default SongTitle;
