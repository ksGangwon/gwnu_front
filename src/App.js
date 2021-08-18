import React, { Component } from 'react';
import './App.css';
import Gnb from './pages/Gnb';
import Fnb from './pages/Fnb';
import { Body, DetailPage } from './pages';
import {Route, Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="bodyContainer">
          <Gnb />
          <Route exact path='/' component={Body} />       
          <Switch>
            <Route path="/page/:detail/:number" component={DetailPage} />
            <Route path='/page' component={DetailPage}/>
          </Switch>
          <Fnb />
      </div>
    );
  }
}

export default App;