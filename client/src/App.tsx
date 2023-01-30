import React, { useEffect, useState } from 'react';
import './App.scss';
import { test } from './firebase/firebase';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    test().then((data) => data.forEach((doc) => setData(doc.data())));
  }, []);

  return (
    <div className="App">
      {/* <embed src={data.image} width="800px" height="2100px" /> */}
      <Document file={data.image}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default App;
