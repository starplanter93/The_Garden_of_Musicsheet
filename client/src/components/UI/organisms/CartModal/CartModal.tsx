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
  const [show, setShow] = useState<string>('');

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

  useEffect(() => {
    setShow('show');
    document.body.setAttribute('style', 'overflow: hidden;');
    return () => document.body.setAttribute('style', 'overflow: auto;');
  }, []);

  return (
    <>
      <div className={cx('modal-backdrop')}> </div>
      <div className={cx('modal-container')} onClick={cartModalCloser}>
        <section
          className={cx('cart-modal', { show })}
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
    </>
  );
}

export default CartModal;
