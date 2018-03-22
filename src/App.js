import React, { Component } from 'react';

import HomePage from './page/home'

import logo from './logo.svg';
import './App.css';

function Clock(props) {
    return (
        <div>
            <h1>I Am A Clock</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}


class App extends Component {
  render() {

      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <HomePage />
          <Clock date={new Date()} />
      </div>
    );
  }
}

export default App;
