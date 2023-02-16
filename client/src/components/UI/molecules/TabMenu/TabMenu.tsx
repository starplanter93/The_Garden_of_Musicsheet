import { Button, Text } from '../../atoms';
import styles from './tabMenu.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

interface TabMenuProps {
  tabGroupArr?: string[];
}

const TabMenu = ({
  tabGroupArr = [
    '전체',
    '피아노',
    '일렉 기타',
    '어쿠스틱 기타',
    '베이스',
    '드럼',
  ],
}: TabMenuProps) => {
  const cx = classNames.bind(styles);
  const [currentTab, setCurrentTab] = useState(0);

  const handleClick = (idx: number) => {
    setCurrentTab(idx);
  };

  return (
    <div className={cx('wrapper')}>
      <ul className={cx('tabs')}>
        {tabGroupArr.map((tab, idx) => (
          <li
            key={idx}
            className={cx(
              'tab',
              `tab${idx + 1}`,
              currentTab === idx && 'active'
            )}
          >
            <Button
              theme="transparent"
              size="auto"
              onClick={() => handleClick(idx)}
            >
              <Text
                size="lg"
                color={currentTab === idx ? 'black' : 'gray'}
                weight={currentTab === idx ? 'medium' : 'regular'}
              >
                {tab}
              </Text>
            </Button>
          </li>
        ))}
        <li className={cx('triangle')}></li>
      </ul>
    </div>
  );
};

export default TabMenu;
