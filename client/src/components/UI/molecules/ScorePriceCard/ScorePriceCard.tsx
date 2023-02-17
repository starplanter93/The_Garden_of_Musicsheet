import React from 'react';
import { Text, Button, Icon } from '../../atoms';
import styles from './scorePriceCard.module.scss';
import classNames from 'classnames/bind';

interface SongPriceCardProps {
  price: string;
}

function SongPriceCard({ price }: SongPriceCardProps) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('price-card-wrapper')}>
      <Text size="xlg" weight="bold">{`${price}원`}</Text>
      <Button size="auto">
        <>
          <Icon icon="MdOutlineShoppingBag" color="white" />
          <Text color="white">장바구니 담기</Text>
        </>
      </Button>
    </div>
  );
}

export default SongPriceCard;
