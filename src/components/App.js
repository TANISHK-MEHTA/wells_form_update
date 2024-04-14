// App.js
import React, { useState } from 'react';
import FileUpload from './FileUpload';
import processCSV from './CSVProcessor';
import analyzeMetadata from './CSVAnalyzer';
import DynamicForm from './DynamicForm';

const App = () => {
  const [metadata, setMetadata] = useState(null);

  const handleFileUpload = (file) => {
    processCSV(file, (data) => {
      const analyzedMetadata = analyzeMetadata(data);
      setMetadata(analyzedMetadata);
    });
  };

  return (
    <div>
      <h1>CSV Uploader</h1>
      <FileUpload onFileChange={handleFileUpload} />
      {metadata && <DynamicForm metadata={metadata} />}
    </div>
  );
};

export default App;
