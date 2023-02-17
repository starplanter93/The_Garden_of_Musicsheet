import styles from './instrumentLists.module.scss';
import classNames from 'classnames/bind';
import { InstrumentCard } from '../../molecules';
import { instrumentDummy } from './instrumentDummy';

const InstrumentLists = () => {
  const cx = classNames.bind(styles);

  return (
    <ul className={cx('instrument-lists')}>
      {instrumentDummy.map((el, idx) => (
        <li className={cx('instrument-list')} key={idx}>
          <InstrumentCard type={el.type} name={el.name} src={el.thumbnail} />
        </li>
      ))}
    </ul>
  );
};

export default InstrumentLists;
