import { UserAuth } from '../../UI/organisms';
import classNames from 'classnames/bind';
import styles from './Auth.module.scss';
const Auth = () => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('wrapper')}>
      <UserAuth type="Login" />
    </div>
  );
};

export default Auth;
