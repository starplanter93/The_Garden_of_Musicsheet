import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './PostMusic.module.scss';
import { DropDown, TextEditor, PostSidebar } from '../../UI/molecules';
import { PostButtons, MusicPostInfo } from '../../UI/organisms';
import { auth } from '../../../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const PostMusic = () => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate('/auth');
    }
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('sheet-info')}>
          <PostButtons />
          <div className={cx('dropdown-wrapper')}>
            <div className={cx('dropdown-left')}>
              <DropDown text="난이도" option={['쉬움', '중간', '어려움']} />
            </div>
            <div className={cx('dropdown-right')}>
              <DropDown text="악보 종류" option={['단선 악보', '타브 악보']} />
            </div>
          </div>
        </div>
        <div className={cx('song-info')}>
          <MusicPostInfo type="곡 정보" />
        </div>

        <div className={cx('sale-info')}>
          <MusicPostInfo type="판매 상세 정보" />
          <TextEditor text="상세 내용 설명" />
        </div>
      </div>
      <nav>
        <PostSidebar />
      </nav>
    </div>
  );
};

export default React.memo(PostMusic);
