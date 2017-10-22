import React from 'react';
import logo from './J2d_logo-1.png';
import './App.css';

const App = ({name}) => (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {name}!</h1>
        </header>
        <p className="App-intro">
          To get started, drink some Rakia
        </p>
      </div>
);

export default App;
