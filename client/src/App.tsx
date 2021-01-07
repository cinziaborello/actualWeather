import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  const [data, setData] = useState('');

  const getData = () => {
    fetch('/api')
      .then((result) => result.text())
      .then((res) => setData(res));
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button color="primary" onClick={getData}>Click Me For Date</Button>
        {data}
      </header>
    </div>
  );
}

export default App;
