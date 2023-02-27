import React, { useState, useEffect } from 'react';
import styles from './cartButton.module.scss';
import classNames from 'classnames/bind';
import { Button, Icon, Text } from '../../../atoms';
import { cartModalHandler } from '../../../../../redux/ModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { getCart } from '../../../../../firebase/firebase';

// Todo: 장바구니에 담긴 개수
const CartButton = () => {
  const cx = classNames.bind(styles);
  const [countCart, setCountCart] = useState<number>(0);
  const dispatch = useDispatch();
  const countCartItems = useSelector(
    (state: RootState) => state.modalState.countCartItems
  );
  function cartModalOpener() {
    dispatch(cartModalHandler());
  }

  useEffect(() => {
    getCart().then((data) => {
      if (data) {
        setCountCart(data.cartItems.length);
      }
    });
  }, []);

  return (
    <div className={cx('cartbutton-wrapper')}>
      <Button theme="transparent" size="auto" onClick={cartModalOpener}>
        <Icon icon="MdOutlineShoppingBag" />
      </Button>
      <span className={cx('bubble')}>
        <Text size="s" weight="medium">
          {`${countCart}`}
        </Text>
      </span>
    </div>
  );
};

export default CartButton;
