import React from 'react';
import CartList from '../CartList/CartList';
import styles from './cartBody.module.scss';
import classNames from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';
import { ScoreInfoType } from '../../../pages/Main/Main';

function CartBody({ cartItems }: { cartItems: ScoreInfoType[] }) {
  const cx = classNames.bind(styles);

  return (
    <ul className={cx('cart-body')}>
      {cartItems &&
        cartItems.map((cartItem) => {
          return (
            <CartList
              key={uuidv4()}
              scoreName={cartItem.scoreName}
              artist={cartItem.artist}
              author={cartItem.author}
              price={cartItem.price}
              scoreId={cartItem.scoreId}
            />
          );
        })}
    </ul>
  );
}

export default CartBody;
