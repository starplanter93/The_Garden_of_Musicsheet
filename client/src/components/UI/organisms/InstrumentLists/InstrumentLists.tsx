import styles from './instrumentLists.module.scss';
import classNames from 'classnames/bind';
import { InstrumentCard } from '../../molecules';

const InstrumentLists = () => {
  const cx = classNames.bind(styles);

  return (
    <ul className={cx('instrument-lists')}>
      {/* Todo: 데이터 연결 */}
      {['piano', 'electric', 'acoustic', 'bass', 'drum'].map((el, idx) => (
        <li className={cx('instrument-list')} key={idx}>
          <InstrumentCard
            src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            type={el}
            sheets="12"
          />
        </li>
      ))}
    </ul>
  );
};

export default InstrumentLists;
