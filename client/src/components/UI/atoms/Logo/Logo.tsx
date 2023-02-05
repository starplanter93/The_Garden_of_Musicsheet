import styles from './logo.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../../assets/Logo.png';

interface LogoProps {
  type: 'pc' | 'mobile';
}

const Logo = ({ type }: LogoProps) => {
  const cx = classNames.bind(styles);

  return (
    <h1 className={cx('logo', type)}>
      <a href="/">
        <img src={logo} alt="악보의정원 로고" />
        <span>악보의 정원</span>
      </a>
    </h1>
  );
};

export default Logo;
