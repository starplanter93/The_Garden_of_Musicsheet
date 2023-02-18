import { Button, Text } from '../../atoms';
import styles from './tabMenu.module.scss';
import classNames from 'classnames/bind';
import { Dispatch, SetStateAction, useState } from 'react';

interface TabMenuProps {
  tabGroupArr: string[];
  setClickedTab: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const TabMenu = ({
  tabGroupArr,
  setClickedTab,
  setCurrentPage,
}: TabMenuProps) => {
  const cx = classNames.bind(styles);
  const [currentTab, setCurrentTab] = useState(0);

  const handleClick = (tab: string, idx: number) => {
    setCurrentTab(idx);
    setClickedTab(tab);
    setCurrentPage(1);
  };

  return (
    <div className={cx('wrapper')}>
      <ul className={cx('tabs')}>
        {tabGroupArr.map((tab, idx) => (
          <li key={idx} className={cx('tab', currentTab === idx && 'active')}>
            <Button
              theme="transparent"
              size="auto"
              onClick={() => handleClick(tab, idx)}
            >
              <Text size="lg" color="gray">
                {tab}
              </Text>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabMenu;
