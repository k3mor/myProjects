import React from 'react';
import logo from './logo.svg';
import './App.css';
import Crypto from './Crypto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Crypto rate</h1>
        <h2>Roman Zbroiński</h2>
      </header>
      <Crypto />
    </div>
  );
}

export default App;
