import React from 'react';
import MusicPostInfo from '../../UI/organisms/MusicPostInfo/MusicPostInfo';
import classNames from 'classnames/bind';
import styles from './PostMusic.module.scss';
import { PostInput } from '../../UI/molecules';
import { Button } from '../../UI/atoms';
const PostMusic = () => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('wrapper')}>
      <div>
        <span></span>
        <div>
          <Button size="s" theme="toggle">
            피아노
          </Button>
        </div>
      </div>
      <MusicPostInfo type="곡 정보" />
      <PostInput
        text="저작권 정보"
        type="dropdown"
        placeholder="곡 제목을 입력해주세요"
      />
      <MusicPostInfo type="판매 상세 정보" />
    </div>
  );
};

export default React.memo(PostMusic);
