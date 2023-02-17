import React from 'react';
import { Text, Button, Icon } from '../../atoms';
import styles from './scorepricecard.module.scss';
import classNames from 'classnames/bind';

interface ScorePriceCardProps {
  price: string;
}

function ScorePriceCard({ price }: ScorePriceCardProps) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('price-card')}>
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

export default ScorePriceCard;
