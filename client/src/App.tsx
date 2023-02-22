import { Route, Routes } from 'react-router-dom';
import {
  Instrument,
  InstrumentDetail,
  Layout,
  MusicDetail,
  MyPage,
  ScoreInfo,
} from './components/pages';
import { Main } from './components/pages';
import { Auth, PostMusic } from './components/pages';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PostLayout } from './components/pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="instrument" element={<Instrument />} />
            <Route path="instrument/:instType" element={<InstrumentDetail />} />
            <Route path="music/:songTitle" element={<MusicDetail />} />
            <Route path="/scoreinfo" element={<ScoreInfo />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/:scoreName/:scoreId" element={<ScoreInfo />} />
            {/* MainPage 등 */}
          </Route>
          <Route path="/postmusic" element={<PostLayout />}>
            <Route path="/postmusic" element={<PostMusic />} />
            {/* <Route path='/edit/:scoreName/:scoreId'/> */}
          </Route>
          <Route path="/auth" element={<Auth />}></Route>
          {/* NotFound */}
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
