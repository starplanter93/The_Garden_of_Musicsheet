import styles from './cartButton.module.scss';
import classNames from 'classnames/bind';
import { Button, Icon, Text } from '../../../atoms';

// Todo: 버튼 클릭시 장바구니 표시
// Todo: 장바구니에 담긴 개수
const CartButton = () => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('cartbutton-wrapper')}>
      <Button theme="transparent" size="auto">
        <Icon icon="MdOutlineShoppingBag" />
      </Button>
      <span className={cx('bubble')}>
        <Text size="s" weight="medium">
          10
        </Text>
      </span>
    </div>
  );
};

export default CartButton;
