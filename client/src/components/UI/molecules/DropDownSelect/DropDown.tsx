import classNames from 'classnames/bind';
import { useState } from 'react';
import { Button, Icon, Text } from '../../atoms';
import styles from './dropDown.module.scss';

interface DropDownProps {
  option: string[];
  text: string;
}

const DropDown = ({ option, text }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const cx = classNames.bind(styles);
  const [selectedValue, setSelectedValue] = useState('선택');

  const handleOnClick = (el: string) => {
    setSelectedValue(el);
    setIsOpen(!isOpen);
  };

  const Selection = ({ option }: { option: string[] }) => {
    if (isOpen) {
      return (
        <div className={cx('options')}>
          {option.map((el, idx) => (
            <div
              role="button"
              onClick={() => handleOnClick(el)}
              className={cx('option')}
              key={idx}
            >
              {el}
            </div>
          ))}
        </div>
      );
    } else return null;
  };
  return (
    <>
      <div className={cx('text')}>
        <Text weight="regular" size="m">
          {text}
        </Text>
        <Text size="xlg" color="red">
          *
        </Text>
      </div>
      <Button theme="dropdown" onClick={() => setIsOpen(!isOpen)}>
        <div className={cx('default')}>
          <Text weight="regular" size="s">
            {selectedValue}
          </Text>
          <div className={cx('icon', isOpen ? 'opened' : 'closed')}>
            <Icon size="s" icon="MdKeyboardArrowDown"></Icon>
          </div>
        </div>
      </Button>
      <Selection option={option} />
    </>
  );
};

export default DropDown;
