import './layout.module.scss';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Header } from '../../UI/organisms';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const Layout = () => {
  const { pathname } = useLocation();
  const showFooter = useSelector((state: RootState) => state.showFooter);

  if (pathname === '/') {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        {showFooter && <Footer />}
      </>
    );
  } else {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
};

export default Layout;
