import classNames from 'classnames/bind';
import { Text } from '../../UI/atoms';
import { InstrumentLists } from '../../UI/organisms';
import styles from './instrument.module.scss';
import { useDispatch } from 'react-redux';

const Instrument = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();

  return (
    <section className={cx('container')}>
      <h2>
        <Text size="txlg">악기별 악보</Text>
      </h2>
      <div>
        <InstrumentLists />
      </div>
    </section>
  );
};

export default Instrument;
