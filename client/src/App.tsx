import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/pages';
import Test from './components/pages/Test';
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
          <Route index element={<PostMusic />} />
          {/* MainPage 등 */}
        </Route>

        <Route path="/auth" element={<Auth />}></Route>
        {/* SignUp */}
        {/* NotFound */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
