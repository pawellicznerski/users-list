import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Userlist from './components/Userlist.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Userlist></Userlist>
      </div>
    );
  }
}

export default App;
