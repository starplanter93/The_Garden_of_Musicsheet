import React, { useEffect, useState } from 'react';
import { CartHeader, CartBody, CartFooter } from '../../molecules';
import classNames from 'classnames/bind';
import styles from './cartModal.module.scss';
import { cartModalHandler } from '../../../../redux/ModalSlice';
import { useDispatch } from 'react-redux';
import { getCart } from '../../../../firebase/firebase';
import { ScoreInfoType } from '../../../pages/Main/Main';

function CartModal() {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState<ScoreInfoType[]>([]);

  function cartModalCloser() {
    dispatch(cartModalHandler());
  }

  useEffect(() => {
    getCart().then((data) => {
      if (data) {
        setCartItems(data.cartItems);
      }
    });
  }, []);

  return (
    <div className={cx('backdrop')} onClick={cartModalCloser}>
      <section
        className={cx('cart-modal')}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CartHeader />
        <div className={cx('cart-body-wrapper')}>
          {cartItems && (
            <CartBody cartItems={cartItems} setCartItems={setCartItems} />
          )}
        </div>
        <CartFooter />
      </section>
    </div>
  );
}

export default CartModal;
