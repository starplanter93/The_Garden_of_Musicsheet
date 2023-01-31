import React, { useEffect, useState } from 'react';
import './App.scss';
import { test } from './firebase/firebase';
import { Document, Page } from 'react-pdf';

import Login from './components/UI/organisms/Login/Login';

function App() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    test().then((data) => data.forEach((doc) => setData(doc.data())));
  }, []);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
