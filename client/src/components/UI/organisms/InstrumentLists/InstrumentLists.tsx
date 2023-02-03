import styles from './instrumentLists.module.scss';
import classNames from 'classnames/bind';
import { InstrumentCard } from '../../molecules';

// Todo: props는 추후 데이터 형식에 따라 변경
interface InstrumentListsProps {
  arraylength?: number;
}

const InstrumentLists = ({ arraylength = 5 }: InstrumentListsProps) => {
  const cx = classNames.bind(styles);

  return (
    <ul className={cx('instrument-lists')}>
      {Array(arraylength)
        .fill(0)
        .map((el) => (
          <li className={cx('instrument-list')} key={el}>
            <InstrumentCard
              src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              type="피아노"
              sheets="12"
            />
          </li>
        ))}
    </ul>
  );
};

export default InstrumentLists;
