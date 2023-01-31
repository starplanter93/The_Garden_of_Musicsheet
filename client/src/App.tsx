import React, { useEffect, useState } from 'react';
import './App.scss';
import { test } from './firebase/firebase';
import { Document, Page } from 'react-pdf';

import UserAuth from './components/UI/organisms/UserAuth/UserAuth';

function App() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    test().then((data) => data.forEach((doc) => setData(doc.data())));
  }, []);

  return (
    <div className="App">
      <UserAuth type="Login" />
    </div>
  );
}

export default App;
