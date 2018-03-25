import React, { Component } from 'react';
import { getRoute } from "./page/routes";

import logo from './logo.svg';
import './App.css';

// You can choose your kind of history here (e.g. browserHistory)
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from "./page/HomePage";
import AddPage from "./page/AddPage";

class App extends Component {
  render() {

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
      </div>
    );
  }
}

export default App;
