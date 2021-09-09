import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom';
import SwiperCore, { Navigation, Pagination,Autoplay } from "swiper";
//style
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss"; 
import "swiper/components/pagination/pagination.scss"; 
import "swiper/components/scrollbar/scrollbar.scss"; 

import './Home.css'

SwiperCore.use([Navigation, Pagination, Autoplay])

class Home extends Component {
  render() {
    const swiperUp = {
      effect: "fade",
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    const swiperDown = {
      initialSlide: 2,
      slidesPerView:4,
      spaceBetween: 30,
      loop:true,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      }
    }
    return (
      <div>
        <div className="mainImgSlide minMax">
          <Swiper
           {...swiperUp}
          >
            <SwiperSlide><img src="images/background1.jpg" alt="배경화면"/></SwiperSlide>
            <SwiperSlide><img src="images/background2.jpg" alt="배경화면"/></SwiperSlide>
            <SwiperSlide><img src="images/background3.jpg" alt="배경화면"/></SwiperSlide>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
        
        <div className="noticeContainer minMax">
          <div className="noticeBox">
            <div className="notice">
              <div className="noticeTitle">
                  <h4>공지사항</h4>
                  <Link to="/page/notion/1"><h3>+</h3></Link>
              </div>
              <div className="noticeUi">
                <div className="noticeLi">
                  <Link to="/page/notion/1">
                    <p>공지사항</p>
                    <span>2021-08-13</span>
                  </Link>
                </div> 
                <div className="noticeLi">
                  <Link to="/page/notion/1">
                    <p>공지사항</p>
                    <span>2021-08-13</span>
                  </Link>
                </div> 
              </div>
            </div>

              <div className="notice">
                  <div className="noticeTitle">
                      <h4>보도자료</h4>
                      <Link to="/page/notion/3"><h3>+</h3></Link>
                  </div>
                  <div className="noticeUi">
                    <div className="noticeLi">
                      <Link to="/page/notion/3">
                        <p>보도자료</p>
                        <span>2021-08-13</span>
                      </Link>
                    </div> 
                  </div>
              </div>
              <div className="clearBoth"></div>
              </div>
          </div>
          
          {/*이미지 갤러리*/}
          <div className="galleryContainer minMax">
            <div className="galleryBox">
                <h1>GALLERY</h1>
                  <Swiper
                    {...swiperDown}
                  >
                    <SwiperSlide><Link to="/page/notion/4"><div className="galleryImgBox"><div className="galleryTextBox"><h4>융합원 제목</h4><p>융합원 사진 내용</p></div></div><img src="images/picture/image01.png" alt="배경화면"/></Link></SwiperSlide>
                    <SwiperSlide><Link to="/page/notion/4"><div className="galleryImgBox"><div className="galleryTextBox"><h4>융합원 제목</h4><p>융합원 사진 내용</p></div></div><img src="images/picture/image02.png" alt="배경화면"/></Link></SwiperSlide>
                    <SwiperSlide><Link to="/page/notion/4"><div className="galleryImgBox"><div className="galleryTextBox"><h4>융합원 제목</h4><p>융합원 사진 내용</p></div></div><img src="images/picture/image03.png" alt="배경화면"/></Link></SwiperSlide>
                    <SwiperSlide><Link to="/page/notion/4"><div className="galleryImgBox"><div className="galleryTextBox"><h4>융합원 제목</h4><p>융합원 사진 내용</p></div></div><img src="images/picture/image04.png" alt="배경화면"/></Link></SwiperSlide>
                    <SwiperSlide><Link to="/page/notion/4"><div className="galleryImgBox"><div className="galleryTextBox"><h4>융합원 제목</h4><p>융합원 사진 내용</p></div></div><img src="images/picture/image05.png" alt="배경화면"/></Link></SwiperSlide>
                    <SwiperSlide><Link to="/page/notion/4"><div className="galleryImgBox"><div className="galleryTextBox"><h4>융합원 제목</h4><p>융합원 사진 내용</p></div></div><img src="images/picture/image06.png" alt="배경화면"/></Link></SwiperSlide>
                    <SwiperSlide><Link to="/page/notion/4"><div className="galleryImgBox"><div className="galleryTextBox"><h4>융합원 제목</h4><p>융합원 사진 내용</p></div></div><img src="images/picture/image07.png" alt="배경화면"/></Link></SwiperSlide>
                    <SwiperSlide><Link to="/page/notion/4"><div className="galleryImgBox"><div className="galleryTextBox"><h4>융합원 제목</h4><p>융합원 사진 내용</p></div></div><img src="images/picture/image08.png" alt="배경화면"/></Link></SwiperSlide>
                  </Swiper>
            </div>
          </div>
          

      </div>
    );
  }
}

export default Home;