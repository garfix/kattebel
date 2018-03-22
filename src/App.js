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

      // When the site-root is a path
      // https://github.com/facebook/create-react-app/issues/2959

      let homeUrl = process.env.PUBLIC_URL + '/';
      let addUrl = process.env.PUBLIC_URL + '/add';

      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          {homeUrl}
          <BrowserRouter>
              <div>
                  <Route exact path={homeUrl} component={HomePage} />
                  <Route path={addUrl} component={AddPage} />
              </div>
          </BrowserRouter>
          <Clock date={new Date()} />
      </div>
    );
  }
}

export default App;
