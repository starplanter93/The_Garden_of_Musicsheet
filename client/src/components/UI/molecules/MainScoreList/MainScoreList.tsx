import { ImgLayout, Text } from '../../atoms';
import styles from './mainscorelist.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { memo, useMemo } from 'react';

interface MainScoreListProps {
  profileImg?: string;
  scoreName: string;
  scoreWriter: string;
  instrument: string;
  difficulty: string;
  price: string;
  scoreId: string;
  songTitle: string;
  singer: string;
}

function MainScoreList({
  profileImg,
  scoreName,
  scoreWriter,
  instrument,
  difficulty,
  price,
  scoreId,
  songTitle,
  singer,
}: MainScoreListProps) {
  const cx = classNames.bind(styles);

  const formattedPrice = useMemo(() => Number(price).toLocaleString(), [price]);

  return (
    <div className={cx('scorelist-wrapper')}>
      <a className={cx('profileimg-wrapper')}>
        <ImgLayout src={profileImg} size="s" alt="user-profile" />
      </a>
      <Link
        to={`/${songTitle}-${singer}/${scoreId}`}
        className={cx('score-info')}
      >
        <Text>{scoreName}</Text>
        <Text color="gray">{`${scoreWriter} / ${instrument} / ${difficulty}`}</Text>
      </Link>
      <Text color="blue">{`${formattedPrice}원`}</Text>
    </div>
  );
}

export default memo(MainScoreList);
