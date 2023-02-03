import React from 'react';
import { ImgLayout, Text } from '../../atoms';
import styles from './mainscorelist.module.scss';
import classNames from 'classnames/bind';

interface MainScoreListProps {
  profileImg?: string;
  scoreName: string;
  scoreWriter: string;
  instrument: string;
  difficulty: string;
  price: string;
}

function MainScoreList({
  profileImg,
  scoreName,
  scoreWriter,
  instrument,
  difficulty,
  price,
}: MainScoreListProps) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('scorelist-wrapper')}>
      <ImgLayout src={profileImg} size="s" alt="user-profile" />
      <div className={cx('score-info')}>
        <Text>{scoreName}</Text>
        <Text color="gray">{`${scoreWriter} / ${instrument} / ${difficulty}`}</Text>
      </div>
      <Text color="blue">{price}</Text>
    </div>
  );
}

export default MainScoreList;
