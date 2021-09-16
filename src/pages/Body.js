import React, { Component } from "react";
import Login from "../components/auth/Login";
import Home from "../components/Home";
import DetailPage from "../components/DetailPage";
import Post from '../components/addPost/Post';
import NoticeGallery from '../components/NoticeGallery';
import { Route, Switch } from "react-router-dom";
import DetailNoticePage from "../components/board/DetailNoticePage";

class Body extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}></Route>
        <Switch>
            <Route path="/page/:detail/:number" component={DetailPage} />
            <Route path='/page' component={DetailPage}/>
        </Switch>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Post" component={Post}></Route>
        <Route path="/NoticeGallery" component={NoticeGallery}></Route>
        <Route path="/Detail/:divide/:id" component={DetailNoticePage}></Route>
      </div>
    );
  }
}

export default Body; 