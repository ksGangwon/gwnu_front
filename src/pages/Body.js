import React, { Component } from "react";
import Login from "../components/auth/Login";
import Home from "../components/Home";
import DetailPage from "../components/DetailPage";
import Business from '../components/Business';
import Convergence from '../components/Convergence';
import introduce from '../components/Introduce';
import NoticeMain from '../components/NoticeMain';
import NoticeArchive from '../components/NoticeArchive';
import NoticeEdu from '../components/NoticeEdu';
import NoticeGallery from '../components/NoticeGallery';
import NoticeReport from '../components/NoticeReport';
import Post from '../components/Post';
import { Route, Switch } from "react-router-dom";

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
        <Route path="/Business" component={Business}></Route>
        <Route path="/Convergence" component={Convergence}></Route>
        <Route path="/Introduce" component={introduce}></Route>
        <Route path="/NoticeMain" component={NoticeMain}></Route>
        <Route path="/NoticeArchive" component={NoticeArchive}></Route>
        <Route path="/NoticeEdu" component={NoticeEdu}></Route>
        <Route path="/NoticeGallery" component={NoticeGallery}></Route>
        <Route path="/NoticeReport" component={NoticeReport}></Route>
        <Route path="/Post" component={Post}></Route>
      </div>
    );
  }
}

export default Body; 