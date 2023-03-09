import { Button, Icon, Text } from '../../atoms';
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
  const [moreTab, setMoreTab] = useState('더보기');
  const [dropdown, setDropdown] = useState(false);

  const handleClick = (tab: string, idx: number) => {
    setCurrentTab(idx);
    setClickedTab(tab);
    setCurrentPage(1);
    setMoreTab('더보기');
    setDropdown(false);
  };

  const handleMoreClick = (tab: string, idx: number) => {
    setMoreTab(tab);
    setCurrentTab(idx);
    setClickedTab(tab);
    setCurrentPage(1);
    setDropdown(false);
  };

  return (
    <div className={cx('wrapper')}>
      <ul className={cx('tabs')}>
        {tabGroupArr.map(
          (tab, idx) =>
            idx < 3 && (
              <li
                key={idx}
                className={cx('tab', currentTab === idx && 'active')}
              >
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
            )
        )}
        {tabGroupArr.length > 3 && (
          <li className={cx('tab', currentTab > 2 && 'active')}>
            <Button
              theme="transparent"
              size="auto"
              onClick={() => setDropdown(!dropdown)}
            >
              <>
                <Text size="lg" color="gray">
                  {moreTab}
                </Text>
                <Icon
                  icon={
                    dropdown ? 'MdOutlineArrowDropUp' : 'MdOutlineArrowDropDown'
                  }
                  size="xs"
                  color={currentTab > 2 ? 'black' : 'gray'}
                />
              </>
            </Button>
            <ul className={cx('more-tab', dropdown && 'show')}>
              {tabGroupArr.map(
                (tab, idx) =>
                  idx > 2 && (
                    <li key={idx}>
                      <Button
                        theme="transparent"
                        size="auto"
                        onClick={() => handleMoreClick(tab, idx)}
                      >
                        <Text size="lg" color="gray">
                          {tab}
                        </Text>
                      </Button>
                    </li>
                  )
              )}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TabMenu;
