import React, { useState } from 'react';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import Text from '../../atoms/text/Text';
import { emailRegex, passwordRegex } from '../../../../utils/Regex';
import './textInput.scss';

interface TextInputProps {
  placeholder: 'Email' | 'Password';
}

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
        handleInput(userInput) ? (
          <Text color="red">유효한 이메일 주소가 아닙니다.</Text>
        ) : null}
      </div>
    </>
  );
};

export default TextInput;
