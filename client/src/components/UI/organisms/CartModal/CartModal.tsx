import React, { useEffect, useState } from 'react';
import { CartHeader, CartBody, CartFooter } from '../../molecules';
import classNames from 'classnames/bind';
import styles from './cartModal.module.scss';
import { cartModalHandler } from '../../../../redux/ModalSlice';
import { useDispatch } from 'react-redux';
import { getCart } from '../../../../firebase/firebase';
import { ScoreInfoType } from '../../../pages/Main/Main';
import { auth } from '../../../../firebase/firebase';
import { User } from 'firebase/auth';

function CartModal() {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState<ScoreInfoType[]>([]);
  const [user, setUser] = useState<User | null>(null);

  function cartModalCloser() {
    dispatch(cartModalHandler());
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user as User);
      if (user) {
        getCart(user.uid).then((data) => {
          if (data) {
            setCartItems(data.cartItems);
          }
        });
      }
    });
    return unsubscribe;
  }, [user]);

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
        <CartFooter cartItems={cartItems} setCartItems={setCartItems} />
      </section>
    </div>
  );
}

export default CartModal;
