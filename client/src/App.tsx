import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* MainPage 등 */}
      </Route>
      {/* Login */}
      {/* SignUp */}
      {/* NotFound */}
    </Routes>
  );
}

export default App;
