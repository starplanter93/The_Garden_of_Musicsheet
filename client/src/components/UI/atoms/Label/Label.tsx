import './label.scss';

interface LabelProps {
  placeholder: string;
  isFocused: boolean;
  userInput: string;
}

const Label = ({ placeholder, isFocused, userInput }: LabelProps) => {
  const focus = isFocused || userInput?.length !== 0 ? 'label--focused' : null;
  return <label className={[`label`, focus].join(' ')}>{placeholder}</label>;
};

export default Label;
