import classNames from 'classnames/bind';
import { DocumentData } from 'firebase/firestore/lite';
import { Link, useLocation } from 'react-router-dom';
import { Text } from '../../atoms';
import EditOrDownButton from '../EditOrDownButton/EditOrDownButton';
import styles from './scoreList.module.scss';

interface ScoreListProps {
  score: DocumentData;
  buttonEvent?: 'edit' | 'download';
}

const ScoreList = ({ score, buttonEvent }: ScoreListProps) => {
  const cx = classNames.bind(styles);
  const { pathname } = useLocation();
  const {
    artist,
    difficulty,
    instType,
    price,
    songName,
    author,
    scoreId,
    scoreName,
    downloadURL,
  } = score;

  return (
    <div className={cx('wrapper')}>
      <Link to={`/${songName}-${artist}/${scoreId}`}>
        <div className={cx('detail')}>
          <ul className={cx('score-song')}>
            <li>
              <Text>{scoreName}</Text>
            </li>
            <li>
              <Text color="gray">{artist}</Text>
            </li>
          </ul>
          <ul className={cx('score-info')}>
            <li>
              <Text color="gray">{author}</Text>
            </li>
            <li>
              <Text color="gray">{instType}</Text>
            </li>
            <li>
              <Text color="gray">{difficulty}</Text>
            </li>
          </ul>
        </div>
      </Link>
      {pathname !== '/mypage' ? (
        <div className={cx('price')}>
          <Text color="blue">{`${Number(price).toLocaleString()}원`}</Text>
        </div>
      ) : (
        <div>
          <EditOrDownButton
            event={buttonEvent}
            link={`/scores/edit/${songName}-${artist}/${scoreId}`}
            downloadURL={downloadURL}
          />
        </div>
      )}
    </div>
  );
};

export default ScoreList;
