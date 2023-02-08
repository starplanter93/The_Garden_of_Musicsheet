import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImgLayout, Text } from '../../atoms';
import styles from './instrumentCard.module.scss';

interface InstrumentCardProps {
  src: string;
  type: string;
  sheets: string;
}

const InstrumentCard = ({ src, type, sheets }: InstrumentCardProps) => {
  const cx = classNames.bind(styles);
  const [instrumentName, setInstrumentName] = useState('');

  useEffect(() => {
    if (type === 'piano') setInstrumentName('피아노');
    else if (type === 'electric') setInstrumentName('일렉 기타');
    else if (type === 'acoustic') setInstrumentName('어쿠스틱 기타');
    else if (type === 'bass') setInstrumentName('베이스');
    else if (type === 'drum') setInstrumentName('드럼');
  }, [instrumentName]);

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
          <Text size="lg">{instrumentName}</Text>
        </li>
        <li className={cx('instrument-sheet')}>
          <Text size="m" color="gray" weight="medium">
            {`악보 (${sheets})`}
          </Text>
        </li>
      </ul>
    </Link>
  );
};

export default InstrumentCard;
