import React, { Dispatch, SetStateAction } from 'react';

import styles from './input.module.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import {
  userLoginEmail,
  userLoginPassword,
} from '../../../../redux/LoginSlice';
import {
  userRegEmail,
  userRegPassword,
  userRegPasswordCheck,
  userRegNickname,
} from '../../../../redux/RegSlice';
interface InputProps {
  setIsFocused: Dispatch<SetStateAction<boolean>>;
  setUserInput(state: string): void;
  size: 's' | 'm' | 'l';
  theme: 'basic' | 'icon-input' | 'icon-input-no-label';
  placeholder?: string | '이메일' | '비밀번호' | '비밀번호 확인' | '닉네임';
}

const Input = ({
  placeholder,
  theme,
  size,
  setIsFocused,
  setUserInput,
}: InputProps) => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();

  const handleOnChange = (input: string) => {
    setUserInput(input);

    switch (placeholder) {
      case '이메일':
        dispatch(userLoginEmail({ email: input }));
        dispatch(userRegEmail({ email: input }));
        break;
      case '비밀번호':
        dispatch(userLoginPassword({ password: input }));
        dispatch(userRegPassword({ password: input }));
        break;
      case '비밀번호 확인':
        dispatch(userRegPasswordCheck({ passwordCheck: input }));
        break;
      case '닉네임':
        dispatch(userRegNickname({ nickname: input }));
        break;
    }
  };

  if (theme === 'basic') {
    return (
      <input
        className={cx('default-input', `${size}`)}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder={placeholder}
      ></input>
    );
  }
  if (theme === 'icon-input-no-label') {
    return (
      <input
        className={cx('default-input', `${theme}`, `${size}`)}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder={placeholder}
      ></input>
    );
  } else
    return (
      <input
        type={
          placeholder === '비밀번호' || placeholder === '비밀번호 확인'
            ? 'password'
            : 'text'
        }
        className={cx('default-input', `${theme}`, `${size}`)}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    );
};

export default Input;
