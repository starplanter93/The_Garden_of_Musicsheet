import styles from './utilityMenu.module.scss';
import classNames from 'classnames/bind';
import { CartButton, UserButton } from '../../molecules';
import UserDropdown from '../UserDropdown/UserDropdown';

const UtilityMenu = () => {
  const cx = classNames.bind(styles);

  return (
    <ul className={cx('utility-lists')}>
      <li className={cx('utility-list')}>
        <CartButton />
      </li>
      <li className={cx('utility-list')}>
        <UserButton />
        <div className={cx('utility-lnb', 'hide')}>
          <UserDropdown />
        </div>
      </li>
    </ul>
  );
};

export default UtilityMenu;
