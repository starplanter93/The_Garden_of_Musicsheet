import './postlayout.module.scss';
import { Outlet } from 'react-router-dom';
import { PostHeader } from '../../UI/organisms';

const PostLayout = () => {
  return (
    <>
      <PostHeader />
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </>
  );
};

export default PostLayout;
