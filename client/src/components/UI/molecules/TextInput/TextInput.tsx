import React, { useState } from 'react';
import { Label, Input, Text, Icon } from '../../atoms';

import { emailRegex, passwordRegex } from '../../../../utils/Regex';
import './textInput.scss';

// import styles from './textInput.module.scss';
// import classNames from 'classnames/bind';
interface TextInputProps {
  placeholder: 'Email' | 'Password' | 'Password Check' | 'NickName';
}

// const cx = classNames.bind(styles);

const TextInput = ({ placeholder }: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleInput = (userInput: string) => {
    const valid =
      placeholder === 'Email'
        ? emailRegex.test(userInput)
        : passwordRegex.test(userInput);
    return valid;
  };

  return (
    <>
      <form className="textInput__form">
        <div className="textInput__input">
          <div className="textInput__icon">
            {placeholder === 'Email' && (
              <Icon icon="MdMailOutline" color="gray" />
            )}
            {placeholder === 'Password' && (
              <Icon icon="MdOutlineLock" color="gray" />
            )}
            {placeholder === 'Password Check' && (
              <Icon icon="MdOutlineLock" color="gray" />
            )}
            {placeholder === 'NickName' && (
              <Icon icon="BiUserCircle" color="gray" />
            )}
          </div>
          <Input
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
      <div className="textInput__invalid">
        {placeholder === 'Email' &&
          userInput.length > 5 &&
          !handleInput(userInput) && (
            <>
              <Icon icon="MdInfoOutline" color="red" size="xs" />
              <Text color="red" size="xs">
                유효한 이메일 주소가 아닙니다.
              </Text>
            </>
          )}
        {placeholder === 'Password' &&
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

export default React.memo(TextInput);
