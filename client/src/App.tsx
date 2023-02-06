import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/pages';
import Test from './components/pages/Test';
import { UserAuth } from './components/UI/organisms';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Test />} />
        {/* MainPage 등 */}
      </Route>
      <Route path="/login" element={<UserAuth type="Login" />} />
      {/* Login */}
      {/* SignUp */}
      {/* NotFound */}
    </Routes>
  );
}

export default App;
