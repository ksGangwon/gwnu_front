import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter} from 'react-router-dom';
// import App from './App';
import Gnb from "./pages/Gnb";
import Body from "./pages/Body";
import Fnb from "./pages/Fnb";

ReactDOM.render(
  <HashRouter>
    <Gnb/>
    <Body/>
    <Fnb/>
  </HashRouter>,
  document.getElementById('root')
);

