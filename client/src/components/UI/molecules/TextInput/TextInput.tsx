import React, { useState } from 'react';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';

interface TextInputProps {
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [userInput, setUserInput] = useState('');

  return (
    <div className="textInput">
      <Label
        isFocused={isFocused}
        placeholder={placeholder}
        userInput={userInput}
      ></Label>
      <Input setIsFocused={setIsFocused} setUserInput={setUserInput}></Input>
    </div>
  );
};

export default TextInput;
