import React, { useEffect } from 'react';
import { Input, Text, Icon, ImgLayout } from '../../atoms';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './postInput.module.scss';

interface PostInputProps {
  text: string;
  placeholder: string;
  type: 'input' | 'dropdown';
}

const PostInput = ({ type, text, placeholder }: PostInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [selected, setSelected] = useState<string | undefined>(undefined);
  useEffect(() => {
    setSelected(userInput);
  }, [userInput]);
  console.log(selected);
  const cx = classNames.bind(styles);
  if (type === 'input') {
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
  } else if (type === 'dropdown') {
    return (
      <div className={cx('wrapper')}>
        <div className={cx('text')}>
          <Text weight="regular" size="m">
            {text}
          </Text>
        </div>
        <div className={cx('search')}>
          <div className={cx('icon')}>
            <Icon icon="BiSearch" color="gray" />
          </div>
          <div className={cx('input')}>
            <Input
              theme="icon-input-no-label"
              size="m"
              setIsFocused={setIsFocused}
              setUserInput={setUserInput}
              placeholder={placeholder}
            />
          </div>
        </div>
        <div className={cx('selected-result')}>
          <div className={cx('result-info-icon')}>
            <div className={cx('result-img')}>
              <ImgLayout shape="square" size="s" alt="앨범커버" />
            </div>
            <div className={cx('result-info')}>
              <Text>사건의 지평선</Text>
              <Text size="s">윤하</Text>
            </div>
          </div>
          <div>
            <Icon icon="MdOutlineRemoveCircle" color="gray" />
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default React.memo(PostInput);
