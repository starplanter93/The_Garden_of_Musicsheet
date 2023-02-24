import classNames from 'classnames/bind';
import { Icon, Logo, Text } from '../../atoms';
import styles from './footer.module.scss';

const Footer = () => {
  const cx = classNames.bind(styles);

  return (
    <footer>
      <div className={cx('container')}>
        <div className={cx('top')}>
          <Logo type="pc" />
          <div className={cx('github')}>
            <a
              className={cx('github-team')}
              href="https://github.com/starplanter93/The_Garden_of_Musicsheet"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="BsGithub" size="xs" />
              <Text weight="medium">Team GitHub</Text>
            </a>
            <div className={cx('github-member')}>
              Members GitHub
              <ul className={cx('hide')}>
                <li>
                  <a href="https://github.com/seungmin2ee">Seungmin2ee</a>
                </li>
                <li>
                  <a href="https://github.com/EthanJcoding">Ethan Jeong</a>
                </li>
                <li>
                  <a href="https://github.com/starplanter93">starplanter93</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx('bottom')}>
          <div className={cx('copyright')}>
            <Text size="s" color="gray">
              Copyright 2023. 악보의 정원. All rights reserved.
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
