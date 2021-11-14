import React, { Component } from 'react';
import logo from './logo.svg';
import CountryGame from './CountryGame';
import './App.css';

class App extends Component {
 
  render() {
    return (
      <div className = "App">
        <header>
          <h1>Guess The Flag</h1>
        </header>
        <CountryGame />
      </div>
    )
  }
}

export default App;
