import React from 'react';
import logo from './logo.svg';
import './App.less';

import { GetSystemError } from './services/user';
import { useRequest } from 'ahooks';


function App() {

  const { data, error, loading } = useRequest(GetSystemError);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
