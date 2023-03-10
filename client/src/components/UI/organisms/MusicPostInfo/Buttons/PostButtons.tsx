import { Button, Text } from '../../../atoms';
import classNames from 'classnames/bind';
import styles from './postButtons.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setInstType } from '../../../../../redux/PostSlice';
import { instType } from '../../../../../redux/PostSlice';
import { useLocation } from 'react-router-dom';

interface PostButtonsProps {
  value?: string;
}

const PostButtons = ({ value }: PostButtonsProps) => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [clickedButton, setClickedButton] = useState<number | null>(null);

  const buttons = [
    { label: '피아노', index: 0 },
    { label: '일렉 기타', index: 1 },
    { label: '어쿠스틱 기타', index: 2 },
    { label: '베이스', index: 3 },
    { label: '드럼', index: 4 },
  ];

  useEffect(() => {
    if (value) {
      const index = buttons.find((el) => el.label === value)?.index;
      setClickedButton(index ?? null);
      dispatch(setInstType(value as instType));
    }
  }, [value, dispatch, buttons]);

  const handleButtonClick = (index: number) => {
    setClickedButton(clickedButton === index ? null : index);
    dispatch(setInstType(buttons[index].label as instType));
  };

  const isDisabled = pathname.includes('/edit');

  return (
    <>
      <div className={cx('text')}>
        <Text weight="semibold" size="xlg">
          악보 정보
        </Text>
      </div>
      <div>
        <div className={cx('h2', pathname.includes('/edit') && 'editmode')}>
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
              disabled={isDisabled}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostButtons;
