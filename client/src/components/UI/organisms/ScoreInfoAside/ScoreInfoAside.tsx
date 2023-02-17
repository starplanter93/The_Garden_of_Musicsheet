import React from 'react';
import { ScorePriceCard, UserCard } from '../../molecules';
import styles from './scoreInfoAside.module.scss';
import classNames from 'classnames/bind';

interface ScoreInfoAsideProps {
  price: string;
  author: string;
  profileImg: string;
}

function ScoreInfoAside({ price, author, profileImg }: ScoreInfoAsideProps) {
  const cx = classNames.bind(styles);
  return (
    <aside className={cx('scoreinfo-aside')}>
      <ScorePriceCard price={price} />
      <UserCard author={author} profileImg={profileImg} />
    </aside>
  );
}

export default ScoreInfoAside;
