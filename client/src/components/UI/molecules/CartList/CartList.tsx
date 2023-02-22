import React from 'react';
import { Text, Button, Icon } from '../../atoms';
import styles from './cartList.module.scss';
import classNames from 'classnames/bind';

function CartList() {
  const cx = classNames.bind(styles);
  return (
    <li className={cx('cart-list')}>
      <div className={cx('title-wrapper')}>
        <Text weight="semibold">사건의 지평선 핑거스타일 악보</Text>
        <Text color="gray">윤하</Text>
      </div>
      <Text color="gray">97세어쿠스틱마스터김창식</Text>
      <Text weight="semibold">3,900원</Text>
      <Button theme="secondary" size="tiny">
        <Icon size="xs" color="gray" icon="FaTrash" />
      </Button>
    </li>
  );
}

export default CartList;
