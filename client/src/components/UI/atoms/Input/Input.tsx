import React from 'react';
import './input.scss';
interface InputProps {
  setIsFocused(state: boolean): void;
  setUserInput(state: string): void;
}

const Input: React.FC<InputProps> = ({ setIsFocused, setUserInput }) => {
  return (
    <input
      className="input"
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
      onChange={(e) => {
        setUserInput(e.target.value);
      }}
    />
  );
};

export default Input;
