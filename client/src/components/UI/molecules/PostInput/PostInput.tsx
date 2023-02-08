import React from 'react';
import { Input, Text } from '../../atoms';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './postInput.module.scss';

interface PostInputProps {
  text: string;
  placeholder: string;
}

const PostInput = ({ text, placeholder }: PostInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [userInput, setUserInput] = useState('');
  const cx = classNames.bind(styles);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('text')}>
        <Text weight="regular" size="m">
          {text}
        </Text>
      </div>
      <div className={cx('text')}>
        <Input
          theme="basic"
          size="m"
          setIsFocused={setIsFocused}
          setUserInput={setUserInput}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default React.memo(PostInput);
