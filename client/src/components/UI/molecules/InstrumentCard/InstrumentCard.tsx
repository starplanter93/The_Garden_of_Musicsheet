import classNames from 'classnames/bind';
import { ImgLayout, Text } from '../../atoms';
import styles from './instrumentCard.module.scss';

interface InstrumentCardProps {
  src: string;
  type: string;
  sheets: string;
}

const InstrumentCard = ({ src, type, sheets }: InstrumentCardProps) => {
  const cx = classNames.bind(styles);

  return (
    <ul className={cx('instrument-card')}>
      <li className={cx('instrument-img')}>
        <ImgLayout shape="square" size="responsive" src={src} alt="악기사진" />
      </li>
      <li className={cx('instrument-type')}>
        <Text size="xlg">{type}</Text>
      </li>
      <li className={cx('instrument-sheet')}>
        <Text size="m" color="gray" weight="medium">
          {`악보 (${sheets})`}
        </Text>
      </li>
    </ul>
  );
};

export default InstrumentCard;
