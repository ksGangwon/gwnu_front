import React, { Component } from "react";
import noticeRequest from "../lib/noticeRequest";

class NoticeMain extends Component {
  render() {
    return (
      <div className="contentContainer">
        <form method="POST" action="/">
          <input type="text" name="title" />
          <input type="textarea" name="description" />
          <input type="submit" value="작성" />
        </form>
      </div>
    );
  }
}

export default NoticeMain;
