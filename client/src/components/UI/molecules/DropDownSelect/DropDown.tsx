import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Button, Icon, Text } from '../../atoms';
import styles from './dropDown.module.scss';
import { useDispatch } from 'react-redux';

import {
  setDifficulty,
  difficulty,
  setSheetType,
  sheetType,
} from '../../../../redux/PostSlice';

interface DropDownProps {
  option: string[];
  text: string;
  value?: string;
}

const DropDown = ({ option, text, value }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '선택');
  const dispatch = useDispatch();
  const cx = classNames.bind(styles);

  useEffect(() => {
    if (value) {
      setSelectedValue(value);
      if (text === '난이도') dispatch(setDifficulty(value as difficulty));
      if (text === '악보 종류') dispatch(setSheetType(value as sheetType));
    }
  }, [value, text, dispatch]);

  const handleOnClick = (el: string) => {
    setSelectedValue(el);
    setIsOpen(!isOpen);
    if (text === '난이도') dispatch(setDifficulty(el as difficulty));
    if (text === '악보 종류') dispatch(setSheetType(el as sheetType));
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
    }
    return null;
  };

  return (
    <div>
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
            <Icon size="s" icon="MdKeyboardArrowDown" />
          </div>
        </div>
      </Button>
      <Selection option={option} />
    </div>
  );
};

export default DropDown;
