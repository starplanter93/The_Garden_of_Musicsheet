import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button, Text } from '../../atoms';
import styles from './cartFooter.module.scss';
import classNames from 'classnames/bind';
import { ScoreInfoType } from '../../../pages/Main/Main';
import { purchaseCartItems } from '../../../../firebase/firebase';
import { useDispatch } from 'react-redux';
import { cartModalHandler, countCartItem } from '../../../../redux/ModalSlice';
import { getCart } from '../../../../firebase/firebase';
import { auth } from '../../../../firebase/firebase';
import { toast } from 'react-toastify';

interface CartItemsProps {
  cartItems: ScoreInfoType[];
  setCartItems: Dispatch<SetStateAction<ScoreInfoType[]>>;
}

function CartFooter({ cartItems, setCartItems }: CartItemsProps) {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const totalPrice = cartItems.reduce((acc, cur) => {
    return acc + Number(cur.price);
  }, 0);
  const countItems = cartItems.length;

  const notify = () =>
    toast('구매 성공!', {
      autoClose: 300,
      closeOnClick: true,
      pauseOnHover: false,
      type: 'success',
    });

  async function purchase() {
    setIsLoading(true);
    await purchaseCartItems(cartItems, totalPrice);
    setCartItems([]);
    auth.onAuthStateChanged((user) => {
      if (user) {
        getCart(user.uid).then((data) => {
          if (data) {
            dispatch(countCartItem(data.cartItems.length));
          }
        });
      }
    });
    setIsLoading(false);
    notify();
    dispatch(cartModalHandler());
  }

  return (
    <div className={cx('cart-footer')}>
      <div className={cx('text-wrapper')}>
        <Text>{`총 주문 가격 (${countItems})`}</Text>
        <Text size="xlg" weight="bold">
          {`${Number(totalPrice).toLocaleString()}원`}
        </Text>
      </div>

      {isLoading ? (
        <Button size="auto" disabled={true}>
          <Text color="white">로딩중</Text>
        </Button>
      ) : (
        <Button size="auto" onClick={purchase}>
          <Text color="white">결제하기</Text>
        </Button>
      )}
    </div>
  );
}

export default CartFooter;
