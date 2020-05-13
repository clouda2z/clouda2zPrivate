import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Timer from './Components/Header/Timer';

function App() {
  return (
    <div className="App">
      <Timer></Timer>
      <Header appName="CloudA2Z"></Header>
      <header className="App-header">
       <Home name="Krishan"/>
      </header>
    </div>
  );
}

export default App;
