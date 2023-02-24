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
  setEditType?: Dispatch<SetStateAction<'optout' | 'editPicture'>>;
}

const MyPageTop = ({
  username,
  photoURL,
  email,
  cash,
  setModal,
  setEditType,
}: MyPageTopProps) => {
  const cx = classNames.bind(styles);

  return (
    <div>
      <div className={cx('cover-wrapper')}>
        <CategoryCover
          setEditType={setEditType}
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
