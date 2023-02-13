import { Button, Text } from '../../../atoms';
import classNames from 'classnames/bind';
import styles from './postButtons.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setInstType } from '../../../../../redux/PostSlice';
import { instType } from '../../../../../redux/PostSlice';

const PostButtons = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const [clickedButton, setClickedButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    if (clickedButton === index) {
      setClickedButton(null);
    } else {
      setClickedButton(index);
      dispatch(setInstType(buttons[index].label as instType));
    }
  };

  const buttons = [
    { label: '피아노', index: 0 },
    { label: '일렉 기타', index: 1 },
    { label: '어쿠스틱 기타', index: 2 },
    { label: '베이스', index: 3 },
    { label: '드럼', index: 4 },
  ];

  return (
    <div>
      <div className={cx('text')}>
        <Text weight="semibold" size="xlg">
          악보 정보
        </Text>
      </div>
      <div>
        <div className={cx('h2')}>
          <Text weight="regular" size="m">
            악기 종류
          </Text>
          <Text size="xlg" color="red">
            *
          </Text>
        </div>
        <div className={cx('buttons')}>
          {buttons.map((button) => (
            <Button
              key={button.index}
              size="s"
              theme="toggle"
              onClick={() => handleButtonClick(button.index)}
              clicked={clickedButton === button.index}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostButtons;
