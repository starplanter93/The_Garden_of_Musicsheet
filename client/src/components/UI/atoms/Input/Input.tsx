import React, { Dispatch, SetStateAction } from 'react';

import styles from './input.module.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import {
  userLoginEmail,
  userLoginPassword,
} from '../../../../redux/LoginSlice';
interface InputProps {
  setIsFocused: Dispatch<SetStateAction<boolean>>;
  setUserInput(state: string): void;
  size: 's' | 'm' | 'l';
  theme: 'basic' | 'icon-input';
  placeholder?: '이메일' | '비밀번호' | '비밀번호 확인' | '닉네임';
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

  if (theme === 'basic') {
    return (
      <input
        className={cx('default-input', `${size}`)}
        onChange={(e) => setUserInput(e.target.value)}
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
        onChange={
          placeholder === '이메일'
            ? (e) => {
                setUserInput(e.target.value);
                dispatch(userLoginEmail({ email: e.target.value }));
              }
            : (e) => {
                setUserInput(e.target.value);
                dispatch(userLoginPassword({ password: e.target.value }));
              }
        }
      />
    );
};

export default Input;
