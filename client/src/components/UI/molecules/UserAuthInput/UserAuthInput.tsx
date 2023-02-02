import React, { useState } from 'react';
import { Label, Input, Text, Icon } from '../../atoms';

import { emailRegex, passwordRegex } from '../../../../utils/Regex';
import './userAuthInput.scss';

// import styles from './userAuthInput.module.scss';
// import classNames from 'classnames/bind';
interface UserAuthInputProps {
  placeholder: '이메일' | '비밀번호' | '비밀번호 확인' | '닉네임';
}

// const cx = classNames.bind(styles);

const UserAuthInput = ({ placeholder }: UserAuthInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleInput = (userInput: string) => {
    let valid;

    if (placeholder === '이메일') {
      valid = emailRegex.test(userInput);
    } else if (placeholder === '비밀번호') {
      valid = passwordRegex.test(userInput);
    }

    return valid;
  };

  return (
    <>
      <form className="userAuthInput__form">
        <div className="userAuthInput__input">
          <div className="userAuthInput__icon">
            {placeholder === '이메일' && (
              <Icon icon="MdMailOutline" color="gray" />
            )}
            {placeholder === '비밀번호' && (
              <Icon icon="MdOutlineLock" color="gray" />
            )}
            {placeholder === '비밀번호 확인' && (
              <Icon icon="MdOutlineLock" color="gray" />
            )}
            {placeholder === '닉네임' && (
              <Icon icon="BiUserCircle" color="gray" />
            )}
          </div>
          <Input
            theme="icon-input"
            size="s"
            setIsFocused={setIsFocused}
            setUserInput={setUserInput}
          ></Input>
          <Label
            isFocused={isFocused}
            placeholder={placeholder}
            userInput={userInput}
          ></Label>
        </div>
      </form>
      <div className="userAuthInput__invalid">
        {placeholder === '이메일' &&
          userInput.length > 5 &&
          !handleInput(userInput) && (
            <>
              <Icon icon="MdInfoOutline" color="red" size="xs" />
              <Text color="red" size="xs">
                유효한 이메일 주소가 아닙니다.
              </Text>
            </>
          )}
        {placeholder === '비밀번호' &&
          userInput.length > 5 &&
          !handleInput(userInput) && (
            <>
              <Icon icon="MdInfoOutline" color="red" size="xs" />
              <Text color="red" size="xs">
                유효한 비밀번호가 아닙니다..
              </Text>
            </>
          )}
      </div>
    </>
  );
};

export default React.memo(UserAuthInput);
