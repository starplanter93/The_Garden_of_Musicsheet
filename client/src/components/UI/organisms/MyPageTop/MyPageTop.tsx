import styles from './myPageTop.module.scss';
import classNames from 'classnames/bind';
import { CategoryCover } from '../../molecules';

interface MyPageTopProps {
  username: string; // userName
  photoURL: string; // photoURL
  email: string; // email
  cash: string;
}

const MyPageTop = ({ username, photoURL, email, cash }: MyPageTopProps) => {
  const cx = classNames.bind(styles);
  return (
    <>
      <div className={cx('cover-wrapper')}>
        <CategoryCover
          mypage={true}
          category={username}
          thumbnail={photoURL}
          title={email}
          artist={cash}
        />
      </div>
    </>
  );
};

export default MyPageTop;
