import React, { useState } from 'react';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import Text from '../../atoms/text/Text';
import { emailRegex, passwordRegex } from '../../../../utils/Regex';

enum Placeholder {
  email = 'Email',
  password = 'Password',
}
interface TextInputProps {
  placeholder: Placeholder;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleInput = (userInput: string) => {
    const valid =
      placeholder === 'Email'
        ? emailRegex.test(userInput)
        : passwordRegex.test(userInput);
    return valid;
  };
  console.log(handleInput(userInput));
  return (
    <div className="textInput">
      <Input setIsFocused={setIsFocused} setUserInput={setUserInput}></Input>
      <Label
        isFocused={isFocused}
        placeholder={placeholder}
        userInput={userInput}
      ></Label>
      {placeholder === 'Email' &&
      userInput.length > 5 &&
      handleInput(userInput) ? (
        <Text value="유효한 이메일 주소가 아닙니다."></Text>
      ) : null}
    </div>
  );
};

export default TextInput;
