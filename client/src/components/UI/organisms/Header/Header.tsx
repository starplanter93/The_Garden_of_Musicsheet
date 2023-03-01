import styles from './header.module.scss';
import classNames from 'classnames/bind';
import { GlobalMenu } from '../../molecules';
import UtilityMenu from '../UtilityMenu/UtilityMenu';
import { Button, Logo, Text } from '../../atoms';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Header = () => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();

  return (
    <header className={cx('header')}>
      <nav>
        <Logo type="pc" />
        <GlobalMenu />
        {localStorage.getItem('authorization') ? (
          <div className={cx('utility-menu')}>
            <UtilityMenu />
          </div>
        ) : (
          <div className={cx('login-button')}>
            <Button size="xs" onClick={() => navigate('/auth')}>
              <Text color="white">로그인</Text>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default React.memo(Header);
