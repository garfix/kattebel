import React, { Component } from 'react';
import { getRoute } from "./page/routes";

import logo from './logo.svg';
import './App.css';

// You can choose your kind of history here (e.g. browserHistory)
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from "./page/HomePage";
import AddPage from "./page/AddPage";

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

      // When the site-root is a path
      // https://github.com/facebook/create-react-app/issues/2959

      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <BrowserRouter>
              <div>
                  <Route exact path={getRoute('/')} component={HomePage} />
                  <Route path={getRoute('/add')} component={AddPage} />
              </div>
          </BrowserRouter>
          <Clock date={new Date()} />
      </div>
    );
  }
}

export default App;
