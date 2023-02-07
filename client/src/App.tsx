import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/pages';
import Test from './components/pages/Test';
import { UserAuth } from './components/UI/organisms';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Test />} />
          {/* MainPage 등 */}
        </Route>
        <Route path="/auth" element={<UserAuth type="Login" />}></Route>
        {/* Login */}
        {/* SignUp */}
        {/* NotFound */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
