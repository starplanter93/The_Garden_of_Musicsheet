import classNames from 'classnames/bind';
import { ImgLayout, Text } from '../../atoms';
import styles from './instrumentCard.module.scss';

const InstrumentCard = () => {
  const cx = classNames.bind(styles);

  return (
    <ul className={cx('instrument-card')}>
      <li className={cx('instrument-img')}>
        <ImgLayout shape="square" size="lg" alt="악기사진" />
      </li>
      <li className={cx('instrument-type')}>
        <Text size="xlg">피아노</Text>
      </li>
      <li className={cx('instrument-sheet')}>
        <Text size="m" color="gray" weight="medium">
          악보 (55074)
        </Text>
      </li>
    </ul>
  );
};

export default InstrumentCard;
