import React from 'react';
import './label.scss';

interface LabelProps {
  placeholder: string;
  isFocused: boolean;
  userInput: string;
}

const Label: React.FC<LabelProps> = ({ placeholder, isFocused, userInput }) => {
  const focus = isFocused || userInput?.length !== 0 ? 'label--focused' : null;
  return <label className={[`label`, focus].join(' ')}>{placeholder}</label>;
};

export default Label;
