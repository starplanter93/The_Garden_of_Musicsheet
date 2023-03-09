import styles from './postlayout.module.scss';
import { Outlet } from 'react-router-dom';
import { PostHeader } from '../../UI/organisms';
import classNames from 'classnames/bind';

const PostLayout = () => {
  const cx = classNames.bind(styles);

  return (
    <>
      <PostHeader />
      <main className={cx('post-main')}>
        <Outlet />
      </main>
      {/* Footer */}
    </>
  );
};

export default PostLayout;
