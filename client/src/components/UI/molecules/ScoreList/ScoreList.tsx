import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import { Text } from '../../atoms';
import EditOrDownButton from '../EditOrDownButton/EditOrDownButton';
import styles from './scoreList.module.scss';

interface ScoreListProps {
  buttonEvent?: 'edit' | 'download';
}

// Todo: 데이터 연결
const ScoreList = ({ buttonEvent = 'edit' }: ScoreListProps) => {
  const cx = classNames.bind(styles);
  const { pathname } = useLocation();

  return (
    <div className={cx('wrapper')}>
      {/* Todo: 경로 수정 */}
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
      </Link>
      {!pathname.includes('/maypage') ? (
        <div className={cx('price')}>
          <Text color="blue">5000원</Text>
        </div>
      ) : (
        <div>
          <EditOrDownButton event={buttonEvent} />
        </div>
      )}
    </div>
  );
};

export default ScoreList;
