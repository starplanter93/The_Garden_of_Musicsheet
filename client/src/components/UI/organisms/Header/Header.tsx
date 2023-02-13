import styles from './header.module.scss';
import classNames from 'classnames/bind';
import { GlobalMenu } from '../../molecules';
import UtilityMenu from '../UtilityMenu/UtilityMenu';
import { Button, Icon, Logo, Text } from '../../atoms';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setHeader } from '../../../../redux/HeaderSlice';
import { useEffect } from 'react';

const Header = () => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const headerState = useSelector(
    (state: RootState) => state.postHeader.isPost
  );

  const handleIsPost = () => {
    dispatch(setHeader(false));
    navigate(-1);
  };

  if (headerState) {
    return (
      <header>
        <nav className={cx('nav-post')}>
          <Button size="s" theme="transparent" onClick={() => handleIsPost()}>
            <div className={cx('upload')}>
              <Icon icon="BsArrowLeft" />
              <Text>뒤로 가기</Text>
            </div>
          </Button>
          <Button size="s">
            <div className={cx('save')}>
              <Icon icon="MdOutlineCheck" color="white" />
              <Text color="white">저장하기</Text>
            </div>
          </Button>
        </nav>
      </header>
    );
  } else
    return (
      <header>
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

export default Header;
