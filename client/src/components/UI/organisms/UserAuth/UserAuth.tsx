import { useState } from 'react';
import { Button, Icon, Text } from '../../atoms';
import { UserAuthInput } from '../../molecules';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './userAuth.module.scss';
import {
  handleRegisterUser,
  handleUserLogin,
  handleGoogleLogin,
} from '../../../../utils/utils';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface UserAuthProps {
  type: 'Login' | 'SignUp';
}

const UserAuth = ({ type }: UserAuthProps) => {
  const navigate = useNavigate();
  const userLoginData = useSelector((state: RootState) => state.userLoginInput);
  const userRegData = useSelector((state: RootState) => state.regInfo);
  const [typeState, setTypeState] = useState(type); // page 단에서 진행해도 될 듯
  const cx = classNames.bind(styles);

  const handleOnClick = async () => {
    if (typeState === 'Login') {
      await handleUserLogin(userLoginData.email, userLoginData.password);
      navigate('/');
    } else if (typeState === 'SignUp') {
      await handleRegisterUser(
        userRegData.email,
        userRegData.password,
        userRegData.nickname
      );
      navigate('/');
    } else null;
  };

  const handleOauth = async () => {
    await handleGoogleLogin();
    navigate('/');
  };

  if (typeState === 'Login') {
    return (
      <div className={cx('userAuth')}>
        <div className={cx('userAuth__logo')}>
          <img src={require('../../../../assets/Logo.png')} />
        </div>
        <div className={cx('logo__Text')}>
          <Link to="/">
            <span>악보의 정원</span>
          </Link>
        </div>
        <UserAuthInput type="Login" placeholder="이메일"></UserAuthInput>
        <UserAuthInput type="Login" placeholder="비밀번호"></UserAuthInput>

        <Button size="xl" onClick={() => handleOnClick()}>
          <Text weight="semibold" color="white" size="lg">
            로그인
          </Text>
        </Button>

        <hr></hr>

        <>
          <Button theme="secondary" size="xl" onClick={() => handleOauth()}>
            <div className={cx('userAuth__oauth__btn')}>
              <div className={cx('userAuth__oauth__btn--icon')}>
                <Icon icon="FcGoogle"></Icon>
              </div>
              <div className={cx('userAuth__oauth__btn--text')}>
                <Text weight="regular" color="black" size="lg">
                  Google로 시작하기
                </Text>
              </div>
            </div>
          </Button>
        </>
        <div className={cx('userAuth__register__btn')}>
          <Button
            size="s"
            theme="transparent"
            onClick={() => setTypeState('SignUp')}
          >
            <Text color="green" weight="semibold">
              회원가입 하러가기
            </Text>
          </Button>
        </div>
      </div>
    );
  } else if (typeState === 'SignUp') {
    return (
      <div className={cx('userAuth')}>
        <div className={cx('userAuth__logo')}>
          <img src={require('../../../../assets/Logo.png')} />
        </div>
        <div className={cx('logo__Text')}>
          <Link to="/">
            <span>악보의 정원</span>
          </Link>
        </div>

        <UserAuthInput type="SignUp" placeholder="이메일"></UserAuthInput>
        <UserAuthInput type="SignUp" placeholder="비밀번호"></UserAuthInput>
        <UserAuthInput
          type="SignUp"
          placeholder="비밀번호 확인"
        ></UserAuthInput>
        <UserAuthInput type="SignUp" placeholder="닉네임"></UserAuthInput>
        <div className={cx('userAuth__btn')}>
          <Button size="xl" onClick={() => handleOnClick()}>
            <Text weight="semibold" color="white" size="lg">
              회원가입
            </Text>
          </Button>
        </div>
      </div>
    );
  } else return null;
};

export default React.memo(UserAuth);
