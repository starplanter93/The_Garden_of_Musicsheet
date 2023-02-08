import styles from './userDropdown.module.scss';
import classNames from 'classnames/bind';
import { MiniProfile, UserMenu } from '../../molecules';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface Props {
  closeDropdownTarget: any;
  setDropdown: Dispatch<SetStateAction<boolean>>;
}

const UserDropdown = ({ closeDropdownTarget, setDropdown }: Props) => {
  const cx = classNames.bind(styles);

  const handleDropdownClose = (event: any) => {
    if (!closeDropdownTarget.current.contains(event.target)) setDropdown(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleDropdownClose);
    return () => {
      document.removeEventListener('click', handleDropdownClose);
    };
  }, []);

  return (
    <div className={cx('dropdown-wrapper')}>
      <MiniProfile />
      <UserMenu />
    </div>
  );
};

export default UserDropdown;
