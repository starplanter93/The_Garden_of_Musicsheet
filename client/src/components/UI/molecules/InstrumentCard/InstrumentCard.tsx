import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { ImgLayout, Text } from '../../atoms';
import styles from './instrumentCard.module.scss';

interface InstrumentCardProps {
  type: string;
  name: string;
  src: string;
}

const InstrumentCard = ({ type, name, src }: InstrumentCardProps) => {
  const cx = classNames.bind(styles);

  return (
    <Link to={`/instrument/${type}`}>
      <ul className={cx('instrument-card')}>
        <li className={cx('instrument-img')}>
          <ImgLayout
            shape="square"
            size="responsive"
            src={src}
            alt="악기사진"
          />
        </li>
        <li className={cx('instrument-type')}>
          <Text size="lg">{name}</Text>
        </li>
      </ul>
    </Link>
  );
};

export default InstrumentCard;
