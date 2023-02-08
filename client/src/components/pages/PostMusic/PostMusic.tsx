import MusicPostInfo from '../../UI/organisms/MusicPostInfo/MusicPostInfo';
import { useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './PostMusic.module.scss';
import PostInput from '../../UI/molecules/PostInput/PostInput';
const PostMusic = () => {
  const cx = classNames.bind(styles);
  //   const Token =
  //     'BQB-Xbq9MwGn0xT2GkH0DUDdNX21t5UK1-ILyS3Z2klHQrjdkF_CCgGNSCPaQqZZmUclRHrh9ED80CDaTJkc1z8cCcRv9Qz1vgJeQgDsv8-IgVpQ0zl1QhPCBvh8UrPQuwPCFpWREuN1RdPlnH-tXMt_9xqdZko2aqVJUjKjjw4-e5CtWlCiEH4rJwWRvF-yaIhJ8gX4gEiObYAnJoqAKJj7';

  //   useEffect(() => {
  //     axios
  //       .get('https://api.spotify.com/v1/search', {
  //         headers: {
  //           Authorization: `Bearer ${Token}`,
  //         },
  //         params: {
  //           q: '사건의 지평선',
  //           type: 'track',
  //           limit: 1,
  //         },
  //       })
  //       .then((data) => console.log(data.data.tracks));
  //   }, []);
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
