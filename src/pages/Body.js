import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination,Autoplay } from "swiper";
//style
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss"; 
import "swiper/components/pagination/pagination.scss"; 
import "swiper/components/scrollbar/scrollbar.scss"; 

import './Body.css'

SwiperCore.use([Navigation, Pagination, Autoplay])

class Body extends Component {
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
        <div className="mainImgSlide">
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
        
        <div className="noticeContainer">
          <div className="noticeBox">
              <div className="notice">
                  <div className="noticeTitle">
                      <h4>공지사항</h4>
                      <a href="/"><h3>+</h3></a>
                  </div>
                  <ui className="noticeUi">
                    <li className="noticeLi">
                      <a>
                        <p>공지사항</p>
                        <span>2021-08-13</span>
                      </a>
                    </li> 
                    <li className="noticeLi">
                      <a>
                        <p>공지사항</p>
                        <span>2021-08-13</span>
                      </a>
                    </li> 
                  </ui>
              </div>

              <div className="notice">
                  <div className="noticeTitle">
                      <h4>보도자료</h4>
                  </div>
                  <ui className="noticeUi">
                      <li className="noticeLi">
                          <a><p>보도자료</p>
                          <span>날짜</span></a>
                        </li>
                  </ui>
              </div>
              </div>
          </div>

          {/*이미지 갤러리*/}
          <div className="galleryContainer">
            <div className="galleryBox">
                <h1>GALLERY</h1>
                  <Swiper
                    {...swiperDown}
                  >
                    <SwiperSlide><a><img src="images/picture/image01.png" alt="배경화면"/><h4>융합원 사진</h4></a></SwiperSlide>
                    <SwiperSlide><a><img src="images/picture/image02.png" alt="배경화면"/><h4>융합원 사진</h4></a></SwiperSlide>
                    <SwiperSlide><a><img src="images/picture/image03.png" alt="배경화면"/><h4>융합원 사진</h4></a></SwiperSlide>
                    <SwiperSlide><a><img src="images/picture/image04.png" alt="배경화면"/><h4>융합원 사진</h4></a></SwiperSlide>
                    <SwiperSlide><a><img src="images/picture/image05.png" alt="배경화면"/><h4>융합원 사진</h4></a></SwiperSlide>
                    <SwiperSlide><a><img src="images/picture/image06.png" alt="배경화면"/><h4>융합원 사진</h4></a></SwiperSlide>
                    <SwiperSlide><a><img src="images/picture/image07.png" alt="배경화면"/><h4>융합원 사진</h4></a></SwiperSlide>
                    <SwiperSlide><a><img src="images/picture/image08.png" alt="배경화면"/><h4>융합원 사진</h4></a></SwiperSlide>
                  </Swiper>
            </div>
          </div>
          

      </div>
    );
  }
}

export default Body;