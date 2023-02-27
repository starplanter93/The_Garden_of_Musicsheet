import React, { Dispatch, SetStateAction } from 'react';
import { Button, Text } from '../../atoms';
import styles from './cartFooter.module.scss';
import classNames from 'classnames/bind';
import { ScoreInfoType } from '../../../pages/Main/Main';
import { purchaseCartItems } from '../../../../firebase/firebase';

interface CartItemsProps {
  cartItems: ScoreInfoType[];
  setCartItems: Dispatch<SetStateAction<ScoreInfoType[]>>;
}

function CartFooter({ cartItems, setCartItems }: CartItemsProps) {
  const cx = classNames.bind(styles);

  const totalPrice = cartItems.reduce((acc, cur) => {
    return acc + Number(cur.price);
  }, 0);
  const countItems = cartItems.length;

  function purchase() {
    purchaseCartItems(cartItems, totalPrice);
    setCartItems([]);
    history.go(0);
  }

  return (
    <div className={cx('cart-footer')}>
      <div className={cx('text-wrapper')}>
        <Text>{`총 주문 가격 (${countItems})`}</Text>
        <Text size="xlg" weight="bold">
          {`${Number(totalPrice).toLocaleString()}원`}
        </Text>
      </div>
      <Button size="auto" onClick={purchase}>
        <Text color="white">결제하기</Text>
      </Button>
    </div>
  );
}

export default CartFooter;
