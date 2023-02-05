import styles from './userDropdown.module.scss';
import classNames from 'classnames/bind';
import { MiniProfile, UserMenu } from '../../molecules';

const UserDropdown = () => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('dropdown-wrapper')}>
      <MiniProfile />
      <UserMenu />
    </div>
  );
};

export default UserDropdown;
