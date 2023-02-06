import React, { useState, useCallback } from 'react';
import { Label, Input, Text, Icon } from '../../atoms';

import { emailRegex, passwordRegex } from '../../../../utils/Regex';
import './userAuthInput.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
interface UserAuthInputProps {
  placeholder: '이메일' | '비밀번호' | '비밀번호 확인' | '닉네임';
}

const UserAuthInput = ({ placeholder }: UserAuthInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [userInput, setUserInput] = useState('');
  const userRegInput = useSelector(
    (state: RootState) => state.regInfo.password
  );
  const handleInput = useCallback((input: string) => {
    let valid;

    if (placeholder === '이메일') {
      valid = emailRegex.test(input);
    } else if (placeholder === '비밀번호') {
      valid = passwordRegex.test(input);
    }

    return valid;
  }, []);

  const InputValidation = ({ input }: { input: string }) => {
    if (placeholder === '이메일' && input.length > 5 && !handleInput(input)) {
      return (
        <>
          <Icon icon="MdInfoOutline" color="red" size="xs" />
          <Text color="red" size="xs">
            유효한 이메일 주소가 아닙니다.
          </Text>
        </>
      );
    }
    if (placeholder === '비밀번호' && input.length > 5 && !handleInput(input)) {
      return (
        <>
          <Icon icon="MdInfoOutline" color="red" size="xs" />
          <Text color="red" size="xs">
            유효한 비밀번호가 아닙니다.
          </Text>
        </>
      );
    }
    if (
      placeholder === '비밀번호 확인' &&
      input.length > 5 &&
      userRegInput !== userInput
    ) {
      return (
        <>
          <Icon icon="MdInfoOutline" color="red" size="xs" />
          <Text color="red" size="xs">
            비밀번호가 일치하지 않습니다.
          </Text>
        </>
      );
    } else return null;
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
            placeholder={placeholder}
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
        <InputValidation input={userInput} />
      </div>
    </>
  );
};

export default React.memo(UserAuthInput);
