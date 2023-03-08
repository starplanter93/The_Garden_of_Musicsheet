import { Route, Routes } from 'react-router-dom';
import {
  EditScore,
  Instrument,
  InstrumentDetail,
  Layout,
  MusicDetail,
  MyPage,
  ScoreInfo,
  NotFound,
} from './components/pages';
import { Main } from './components/pages';
import { Auth, PostMusic } from './components/pages';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PostLayout } from './components/pages';
import { useSelector } from 'react-redux';
import { CartModal } from './components/UI/organisms';
import { RootState } from './redux/store';

function App() {
  const isCartModalOpened = useSelector((state: RootState) => state.modalState);
  return (
    <>
      <BrowserRouter>
        {isCartModalOpened.isCartModalOpened && <CartModal />}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="instrument" element={<Instrument />} />
            <Route path="instrument/:instType" element={<InstrumentDetail />} />
            <Route path="music/:songTitle" element={<MusicDetail />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/:scoreName/:scoreId" element={<ScoreInfo />} />
          </Route>
          <Route path="/scores" element={<PostLayout />}>
            <Route path="post" element={<PostMusic />} />
            <Route path="edit/:scoreName/:scoreId" element={<EditScore />} />
          </Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
