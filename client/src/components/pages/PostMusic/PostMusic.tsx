import React from 'react';

import classNames from 'classnames/bind';
import styles from './PostMusic.module.scss';
import { PostInput } from '../../UI/molecules';
import { PostButtons, MusicPostInfo } from '../../UI/organisms';
const PostMusic = () => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <PostButtons />
        <MusicPostInfo type="곡 정보" />
        <PostInput
          text="저작권 정보"
          type="dropdown"
          placeholder="곡 제목을 입력해주세요"
        />
        <MusicPostInfo type="판매 상세 정보" />
      </div>
    </div>
  );
};

export default React.memo(PostMusic);
