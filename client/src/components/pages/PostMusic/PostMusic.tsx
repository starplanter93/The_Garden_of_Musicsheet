import MusicPostInfo from '../../UI/organisms/MusicPostInfo/MusicPostInfo';
import { useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './PostMusic.module.scss';
import PostInput from '../../UI/molecules/PostInput/PostInput';
const PostMusic = () => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('wrapper')}>
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

export default PostMusic;
