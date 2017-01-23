import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './hello.js'

class App extends Component {
  render() {

    const users = [
        { _id: 1, name: 'Leia' },
        { _id: 2, name: 'Luke' },
        { _id: 3, name: 'Han' }
      ];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        <div>
        { users.map(function(user) {
            return <Hello key={user._id} name={user.name} />;
          })
        }
        </div>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
    );
  }
}






export default App;
