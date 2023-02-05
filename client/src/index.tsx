import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import UserAuth from './components/UI/organisms/UserAuth/UserAuth';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserAuth type="SignUp" />
    </Provider>
  </React.StrictMode>
);
