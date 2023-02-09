import { Route, Routes } from 'react-router-dom';
import { Instrument, Layout } from './components/pages';
import { Main } from './components/pages';
import { Auth, PostMusic } from './components/pages';
import { BrowserRouter } from 'react-router-dom';
import { getDocument } from './firebase/firebase';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    getDocument().then((data) => console.log(data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="instrument" element={<Instrument />} />
          {/* MainPage 등 */}
        </Route>
        <Route path="/auth" element={<Auth />}></Route>
        {/* NotFound */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
