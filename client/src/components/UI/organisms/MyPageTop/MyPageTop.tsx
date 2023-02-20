import styles from './myPageTop.module.scss';
import classNames from 'classnames/bind';
import { CategoryCover } from '../../molecules';
import { Dispatch, SetStateAction, useState } from 'react';

interface MyPageTopProps {
  username: string; // userName
  photoURL: string; // photoURL
  email: string; // email
  cash: string;
  setModal?: Dispatch<SetStateAction<boolean>>;
}

const MyPageTop = ({
  username,
  photoURL,
  email,
  cash,
  setModal,
}: MyPageTopProps) => {
  const cx = classNames.bind(styles);

  return (
    <div>
      <div className={cx('cover-wrapper')}>
        <CategoryCover
          setModal={setModal}
          mypage={true}
          category={username}
          thumbnail={photoURL}
          title={email}
          artist={cash}
        />
      </div>
    </div>
  );
};

export default MyPageTop;
