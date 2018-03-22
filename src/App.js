import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

// You can choose your kind of history here (e.g. browserHistory)
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from "./page/home";
import AddPage from "./page/add";

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
          <BrowserRouter>
              <div>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/add" component={AddPage} />
              </div>
          </BrowserRouter>
          <Clock date={new Date()} />
      </div>
    );
  }
}

export default App;
