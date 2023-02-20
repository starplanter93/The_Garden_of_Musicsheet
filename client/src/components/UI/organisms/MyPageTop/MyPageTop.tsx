import styles from './myPageTop.module.scss';
import classNames from 'classnames/bind';
import { CategoryCover } from '../../molecules';
import { useState } from 'react';
import { TabMenu } from '../../molecules';

interface MyPageTopProps {
  username: string; // userName
  photoURL: string; // photoURL
  email: string; // email
  cash: string;
}

const MyPageTop = ({ username, photoURL, email, cash }: MyPageTopProps) => {
  const cx = classNames.bind(styles);
  const [clickedTab, setClickedTab] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <div className={cx('cover-wrapper')}>
        <CategoryCover
          mypage={true}
          category={username}
          thumbnail={photoURL}
          title={email}
          artist={cash}
        />
      </div>
      <TabMenu
        setClickedTab={setClickedTab}
        tabGroupArr={['등록한 악보', '구매한 악보']}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default MyPageTop;
