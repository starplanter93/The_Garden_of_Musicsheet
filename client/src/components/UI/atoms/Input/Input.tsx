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
  userInput?: string;
}

const Input = ({
  placeholder,
  theme,
  size,
  setIsFocused,
  setUserInput,
  userInput,
}: InputProps) => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const regExp = /[0-9]/g;

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
    if (placeholder === '원 단위') {
      const numberInputOnWheelPreventChange = (e: any) => {
        e.target.blur();
        e.stopPropagation();
        setTimeout(() => {
          e.target.focus();
        }, 0);
      };
      return (
        <input
          className={cx('default-input', `${size}`)}
          value={userInput}
          onWheel={numberInputOnWheelPreventChange}
          onChange={(e) => {
            if (regExp.test(e.target.value)) {
              setUserInput(e.target.value);
            } else setUserInput('');
          }}
          placeholder={placeholder}
          type="number"
        />
      );
    }
    return (
      <input
        className={cx('default-input', `${size}`)}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder={placeholder}
      />
    );
  } else if (theme === 'icon-input-no-label') {
    return (
      <input
        className={cx('default-input', `${theme}`, `${size}`)}
        onChange={(e) => setUserInput(e.target.value)}
        onClick={() => setIsFocused(true)}
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

export default React.memo(Input);
