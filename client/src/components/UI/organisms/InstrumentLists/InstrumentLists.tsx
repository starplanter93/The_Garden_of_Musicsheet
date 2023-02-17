import styles from './instrumentLists.module.scss';
import classNames from 'classnames/bind';
import { InstrumentCard } from '../../molecules';
import { instrumentDummy } from './instrumentDummy';

const InstrumentLists = () => {
  const cx = classNames.bind(styles);

  return (
    <ul className={cx('instrument-lists')}>
      {/* Todo: 악보 개수 데이터 연결 */}
      {instrumentDummy.map((el, idx) => (
        <li className={cx('instrument-list')} key={idx}>
          <InstrumentCard
            type={el.type}
            name={el.name}
            src={el.thumbnail}
            sheets="12"
          />
        </li>
      ))}
    </ul>
  );
};

export default InstrumentLists;
