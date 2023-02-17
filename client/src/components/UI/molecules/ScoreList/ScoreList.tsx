import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Text } from '../../atoms';
import styles from './scoreList.module.scss';

const ScoreList = () => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('wrapper')}>
      <Link to="/scoredetail">
        <div className={cx('detail')}>
          <ul className={cx('score-song')}>
            <li>
              <Text>KICK BACK (Chainsaw Man OP)</Text>
            </li>
            <li>
              <Text color="gray">Kenshi Yonezu</Text>
            </li>
          </ul>
          <ul className={cx('score-info')}>
            <li>
              <Text color="gray">Animenz</Text>
            </li>
            <li>
              <Text color="gray">어쿠스틱 기타</Text>
            </li>
            <li>
              <Text color="gray">어려움</Text>
            </li>
          </ul>
        </div>
        <div className={cx('price')}>
          <Text color="blue">5000원</Text>
        </div>
      </Link>
    </div>
  );
};

export default ScoreList;
