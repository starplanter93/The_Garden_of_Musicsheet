import styles from './myPageTop.module.scss';
import classNames from 'classnames/bind';
import { CategoryCover } from '../../molecules';
import { Dispatch, SetStateAction } from 'react';

interface MyPageTopProps {
  username: string;
  photoURL: string;
  email: string;
  cash: string;
  setModal?: Dispatch<SetStateAction<boolean>>;
  setEditType?: Dispatch<SetStateAction<'optout' | 'editPicture'>>;
}

const cx = classNames.bind(styles);

const MyPageTop = ({
  username,
  photoURL,
  email,
  cash,
  setModal,
  setEditType,
}: MyPageTopProps) => {
  return (
    <div className={cx('cover-wrapper')}>
      <CategoryCover
        setEditType={setEditType}
        setModal={setModal}
        mypage
        category={username}
        thumbnail={photoURL}
        title={email}
        artist={cash}
      />
    </div>
  );
};

export default MyPageTop;
