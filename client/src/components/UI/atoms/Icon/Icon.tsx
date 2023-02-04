import * as icons from './icons';
import styles from './icon.module.scss';
import classNames from 'classnames/bind';

interface IconProps {
  icon: keyof typeof icons;
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';
  color?: 'black' | 'gray' | 'green' | 'lightgray' | 'red' | 'white';
}

const Icon = ({ icon, size = 'm', color = 'black' }: IconProps) => {
  const SVG = icons[icon];
  const cx = classNames.bind(styles);

  return (
    <span className={cx('icon-container', `${size}`, `${color}`)}>
      <SVG />
    </span>
  );
};

export default Icon;
