import React from 'react';
import { ScorePriceCard, UserCard } from '../../molecules';
import styles from './scoreInfoAside.module.scss';
import classNames from 'classnames/bind';

interface ScoreInfoAsideProps {
  price: string;
  author: string;
  profileImg: string;
  scoreId: string;
  authorId: string;
  updateCart: () => void;
}

function ScoreInfoAside({
  price,
  author,
  profileImg,
  scoreId,
  authorId,
  updateCart,
}: ScoreInfoAsideProps) {
  const cx = classNames.bind(styles);
  return (
    <aside className={cx('scoreinfo-aside')}>
      <ScorePriceCard
        price={price}
        updateCart={updateCart}
        scoreId={scoreId}
        authorId={authorId}
      />
      <UserCard author={author} profileImg={profileImg} />
    </aside>
  );
}

export default ScoreInfoAside;
