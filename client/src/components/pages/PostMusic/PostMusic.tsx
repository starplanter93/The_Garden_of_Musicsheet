import React from 'react';

import classNames from 'classnames/bind';
import styles from './PostMusic.module.scss';
import { DropDown, PostInput, TextEditor } from '../../UI/molecules';
import { PostButtons, MusicPostInfo } from '../../UI/organisms';
const PostMusic = () => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <PostButtons />
        <div className={cx('dropdown-wrapper')}>
          <div className={cx('dropdown-left')}>
            <DropDown text="난이도" option={['쉬움', '중간', '어려움']} />
          </div>
          <div className={cx('dropdown-right')}>
            <DropDown text="악보 종류" option={['쉬움', '중간', '어려움']} />
          </div>
        </div>
        <MusicPostInfo type="곡 정보" />
        <PostInput
          text="저작권 정보"
          type="dropdown"
          placeholder="곡 제목을 입력해주세요"
        />
        <MusicPostInfo type="판매 상세 정보" />
        <TextEditor text="상세 내용 설명" />
      </div>
    </div>
  );
};

export default React.memo(PostMusic);
