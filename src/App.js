import React, { Component } from 'react';
import './App.css';
import Gnb from './pages/Gnb';
import Fnb from './pages/Fnb';
import Body from './pages/Body';
import DetailPage from './pages/DetailPage';
class App extends Component {
  state = {
    main:false
  }
  render() {
    return (
      <div className="bodyContainer">
          <Gnb />
          {this.state.main ? <Body /> : <DetailPage />}
          <Fnb />
      </div>
    );
  }
}

export default App;