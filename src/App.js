import React, { Component } from 'react';
import './App.css';
import Gnb from './pages/Gnb';
import Fnb from './pages/Fnb';
import Body from './pages/Body';
class App extends Component {
  render() {
    return (
      <div className="bodyContainer">
          <Gnb />
          <Body />
          <Fnb />
      </div>
    );
  }
}

export default App;