import React, { Component } from 'react';
import ReactDOM  from 'react-dom';

import logo from './logo.svg';
import './App.css';

class Welcome extends Component {
    render() {
        return this.props.first;
    }
}

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

      const name = {
          firstName: 'Patrick',
          lastName: 'van Bergen'
      };

      function formatName(user) {
          return <span><i>{user.firstName}</i> {user.lastName}</span>;
      }

      function tick() {
          const element = (
              <div>
                  <h1>Hello, world!</h1>
                  <h2>It is {new Date().toLocaleTimeString()}.</h2>
              </div>
          );
          ReactDOM.render(element, document.getElementById('root2'));
      }

      setInterval(tick, 500);

      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, <Welcome first={formatName(name)} /></h1>
        </header>
          <h1>Hello, {formatName(name)}!</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Clock date={new Date()} />
      </div>
    );
  }
}

export default App;
