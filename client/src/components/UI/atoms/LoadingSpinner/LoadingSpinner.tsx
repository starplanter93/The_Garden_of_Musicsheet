import styles from './loadingSpinner.module.scss';
import classNames from 'classnames/bind';
import { Oval } from 'react-loader-spinner';

const LoadingSpinner = () => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('container')}>
      <Oval width="30" height="30" secondaryColor="#a5a5a5" color="#eeefef" />
    </div>
  );
};

export default LoadingSpinner;
