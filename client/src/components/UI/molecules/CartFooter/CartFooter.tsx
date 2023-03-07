import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
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
import { setCash } from '../../../../redux/UserSlice';

interface CartItemsProps {
  cartItems: ScoreInfoType[];
  setCartItems: Dispatch<SetStateAction<ScoreInfoType[]>>;
}

function CartFooter({ cartItems, setCartItems }: CartItemsProps) {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countItems, setCountItems] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

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
            dispatch(setCash(data.cash));
          }
        });
      }
    });
    setIsLoading(false);
    notify();
    dispatch(cartModalHandler());
  }

  useEffect(() => {
    if (cartItems) {
      setCountItems(cartItems.length);
      setTotalPrice(
        cartItems.reduce((acc, cur) => {
          return acc + Number(cur.price);
        }, 0)
      );
    }
  }, [cartItems]);

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
      ) : countItems > 0 ? (
        <Button size="auto" onClick={purchase}>
          <Text color="white">결제하기</Text>
        </Button>
      ) : (
        <Button size="auto" disabled={true}>
          <Text color="white">악보를 담아주세요</Text>
        </Button>
      )}
    </div>
  );
}

export default CartFooter;
