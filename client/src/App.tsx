import { Route, Routes } from 'react-router-dom';
import {
  EditScore,
  Instrument,
  InstrumentDetail,
  Layout,
  MusicDetail,
  ScoreInfo,
} from './components/pages';
import { Main } from './components/pages';
import { Auth, PostMusic } from './components/pages';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <Route path="/postmusic" element={<PostMusic />} />
            <Route path="/:scoreName/:scoreId" element={<ScoreInfo />}></Route>
            <Route
              path="edit/:scoreName/:scoreId"
              element={<EditScore />}
            ></Route>
            {/* MainPage 등 */}
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
