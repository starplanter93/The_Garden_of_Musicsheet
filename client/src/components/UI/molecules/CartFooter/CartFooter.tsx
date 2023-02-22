import React from 'react';
import { Button, Text } from '../../atoms';
import styles from './cartFooter.module.scss';
import classNames from 'classnames/bind';

function CartFooter() {
  const cx = classNames.bind(styles);
  return (
    <footer className={cx('cart-footer')}>
      <div className={cx('text-wrapper')}>
        <Text>총 주문 가격</Text>
        <Text size="xlg" weight="bold">
          10,000원
        </Text>
      </div>
      <Button size="auto">
        <Text color="white">결제하기</Text>
      </Button>
    </footer>
  );
}

export default CartFooter;
