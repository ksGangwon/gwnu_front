import React, { Component } from 'react';
import "./NoticeGallery.css";
import Masonry from "react-masonry-css";

class NoticeGallery extends Component {
    render() {
      //이미지 가져오기
      // var items = [
      //     {id: 1, name: 'My First Item', img:"images/test/1.jpg"},
      //     {id: 2, name: 'Another item', img:"images/test/2.jpg"},
      //     {id: 3, name: 'Third Item', img:"images/test/3.jpg"},
      //     {id: 4, name: 'Here is the Fourth', img:"images/test/4.jpg"},
      //     {id: 5, name: 'High Five', img:"images/test/5.jpg"},
      //     {id: 6, name: 'mary six', img:"images/test/6.jpg"},
      //     {id: 7, name: '7777', img:"images/test/7.jpg"},
      //     {id: 8, name: '8888', img:"images/test/8.jpg"}
      //   ];
        items = items.map(function(item) {
          return <div key={item.id}><img src={process.env.PUBLIC_URL+item.img} alt="갤러리"/>{item.name}</div>
        });
        
        const breakpointColumnsObj = {
          default: 4,
          1100: 3,
          700: 2,
          500: 1
        };
      return (
          <div className="noticeGallery minMax">
              <Masonry 
                  breakpointCols={breakpointColumnsObj}
                  className = 'noticeImages'
                  columnClassName = 'noticeImage'
              >
                {items}
              </Masonry>
          </div>
      );
    }
}

export default NoticeGallery;