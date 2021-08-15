import React, { Component } from 'react';
import './App.css';
import Gnb from './pages/Gnb';
import Fnb from './pages/Fnb';
import Body from './pages/Body';
import {HashRouter} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="bodyContainer">
        <HashRouter>
          <Gnb />
          <Body />
          <Fnb />
        </HashRouter>
      </div>
    );
  }
}

export default App;