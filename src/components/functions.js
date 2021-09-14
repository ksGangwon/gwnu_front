import {Link} from 'react-router-dom';
import Notice from './board/NoticePage';
import React, { Component } from "react";
import NoticeGallery from './NoticeGallery';
import GalleryWrite from './write/GalleryWrite';
import "./functions.css"
import Post from './addPost/Post';
import DetailNoticePage from './board/DetailNoticePage';

export function pageLoder(detail, number)
{
    if(detail==="introduce"){
        switch (number){
            case "1":
                return <div className="contentIntroduce">
                    <h1>행복한 신(新)강원시대를 열어갈 글로벌 최첨단산업단지!</h1>
                    <h6>강원산학융합지구는 산업단지와 대학의 공간적 통합과 현장맞춤형 교육을 통해 산학연이 함께하는 융복합 인재양성 및 선도기술개발의 허브가 되도록 앞장서겠습니다.</h6>
                    <p>안녕하십니까? 사단법인 강원산학융합원 홈페이지 방문을 진심으로 환영합니다.</p>
                    <p>강원도는 중소·중견기업의 R&D기능 부재와 고급인력의 타지역 유출, 문화 편의시설 부족으로 원주소재 기업의 생산성 저하와 신규 근로자의 유입 감소라는 악순환이 반복되고 있습니다.</p>
                    <p>이에, 강원원주 산학융합지구 조성사업은 문막·반계 산업단지 및 주변 산업단지를 중심으로 대학을 공간적으로 통합하고 현장중심의 산학융합형 교육시스템을 도입하여 산업현장에서 R&D인력양성고용이 융합된 산학일체형 인재육성 시스템을 구축하는 선도적 역할을 하게 될 것입니다.</p>
                    <p>주요 추진사업으로는 근로자의 자기개발과 역량강화를 위한 근로자평생학습, 고급 인재양성을 위한 현장맞춤형 교육, 중소기업역량강화를 통한 산학연 네트워크 지원 사업을 추진하고 있습니다.</p>
                    <p>앞으로 강원산학융합원은 국가 거점산업의 불모지에서 벗어나 4차 산업혁명의 핵심인 빅데이터 분야와 헬스케어, 관광, 이모빌리티 분야 인프라 구축과 차별화된 전략으로 강원도 경제를 선도하기 위해 산학연관의 혁신주체들의 의지를 모아 지역사회 발전에 이바지하고 국가경쟁력을 높이는 역할을 해 나가도록 하겠습니다.</p>
                    <p>여러분의 많은 관심과 성원 부탁드립니다. 감사합니다.</p>
                    <h5>(사)강원산학융합원원장  김 환 석</h5>
                </div> ;
            case "2":
                return <img src="/images/detail/사업소개.png" alt="사업소개"/>;
            case "3":
                return <h1>주요연혁</h1>;
            case "4":
                return <img src="/images/detail/조직도.png" alt="조직도"/>;
            case "5":
                return <h1>CI 소개</h1>;
            case "6":
                return <h1>참여기관</h1>;
            case "7":
                return <div className="map">
                        <iframe title="map"  width="80%" height="500" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.5856600206007!2d127.9224207210971!3d37.30495269855958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356376917e5e1783%3A0xbb03d0f1cd046340!2z6rCV66aJ7JuQ7KO864yA7ZWZ6rWQIOybkOyjvOy6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1621525682297!5m2!1sko!2skr"   allowfullscreen="" loading="lazy" ></iframe>
                    </div>
            default:

            }
    }
    else if(detail==="business"){
        switch (number){
            case "1":
                return <div> <img src="/images/detail/학습프로그램1.png" alt="학습프로그램"/> <img src="/images/detail/학습프로그램2.png" alt="학습프로그램"/></div> ;
            case "2":
                return <h1>현장맞춤형교과과정운영</h1>;
            case "3":
                return <h1>중소기업역량강화</h1>;
            case "4":
                return <h1> 대학체제 개편</h1>;
            default:
        }
    }
    else if(detail==="area"){
        switch (number){
            case "1":
                return <img src="/images/detail/융합지구시설.png" alt="융합지구시설"/> ;
            case "2":
                return <h1>기업연구관안내</h1>;
            default:
        }
    }
    else{
        switch (number){
            case "1":
                return <Notice /> ;
            case "2":
                return "교육 및 사업안내";
            case "3":
                return "보도자료";
            case "4":
                return <NoticeGallery />;
            case "5":
                return "자료실 ";
            case "6":
                return "공지사항 글쓰기" ;
            case "7":
                return "교육 및 사업안내 글쓰기";
            case "8":
                return "보도자료 글쓰기";
            case "9":
                return <GalleryWrite />;
            case "10":
                return "자료실 글쓰기";
            case "11":
                return <Post />;
        }
    }
}

export function informPageLoder(number)
{
    switch (number){
        case "1":
            return <DetailNoticePage /> ;
        case "2":
            return "교육 및 사업안내";
        case "3":
            return "보도자료";
        case "4":
            return <NoticeGallery />;
        case "5":
            return "자료실 ";
        case "6":
            return "공지사항 글쓰기" ;
        case "7":
            return "교육 및 사업안내 글쓰기";
        case "8":
            return "보도자료 글쓰기";
        case "9":
            return <GalleryWrite />;
        case "10":
            return "자료실 글쓰기";
        case "11":
            return <Post />;
    }
}

export function pageName(name) {
    if(name==="introduce") return "융합원소개";
    if(name==="business") return "산학융합촉진사업";
    if(name==="area") return "강원산학융합지구";
    if(name==="notion") return "알림마당";
}
export function pageDetailName(detail, number ) {
    if(detail==="introduce"){
        switch (number){
            case "1":
                return "인사말" ;
            case "2":
                return "사업소개";
            case "3":
                return "주요연혁";
            case "4":
                return "조직도";
            case "5":
                return "CI 소개";
            case "6":
                return "참여기관";
            case "7":
                return "오시는 길";
            default:
                
        }
    }
    if(detail==="business"){
        switch (number){
            case "1":
                return "근로자평생학습프로그램" ;
            case "2":
                return "현장맞춤형교과과정운영";
            case "3":
                return "중소기업역량강화";
            case "4":
                return "대학체제 개편";
            default:
        }
    };
    if(detail==="area") {
        switch (number){
            case "1":
                return "강원산학융합지구시설" ;
            case "2":
                return "기업연구관안내";
            default:
        }
    };

    if(detail==="notion") {
        switch (number){
            case "1":
                return "공지사항" ;
            case "2":
                return "교육및사업안내";
            case "3":
                return "보도자료";
            case "4":
                return "포토갤러리";
            case "5":
                return "자료실";
            default:
        }
    }
}

export function pageList(page){
    if(page==="introduce"){
        return <div>
            <Link to="/page/introduce/1"><p>인사말</p></Link>
            <Link to="/page/introduce/2"><p>사업소개</p></Link>
            <Link to="/page/introduce/3"><p>주요연혁</p></Link>
            <Link to="/page/introduce/4"><p>조직도</p></Link>
            <Link to="/page/introduce/5"><p>CI소개</p></Link>
            <Link to="/page/introduce/6"><p>참여기관</p></Link>
            <Link to="/page/introduce/7"><p>오시는 길</p></Link>
        </div>
    }
    if(page==="business") {
        return <div>
            <Link to="/page/business/1"><p>근로자평생학습프로그램</p></Link>
            <Link to="/page/business/2"><p>현장맞춤형교과과정운영</p></Link>
            <Link to="/page/business/3"><p>중소기업역량강화</p></Link>
            <Link to="/page/business/4"><p>대학체제 개편</p></Link>
        </div>
    }
    if(page==="area") {
        return <div>
            <Link to="/page/area/1"><p>강원산학융합지구시설</p></Link>
            <Link to="/page/area/2"><p>기업연구관안내</p></Link>
        </div>
    }
    if(page==="notion") {
        return <div>
            <Link to="/page/notion/1"><p>공지사항</p></Link>
            <Link to="/page/notion/2"><p>교육및사업안내</p></Link>
            <Link to="/page/notion/3"><p>보도자료</p></Link>
            <Link to="/page/notion/4"><p>포토갤러리</p></Link>
            <Link to="/page/notion/5"><p>자료실</p></Link>
        </div>
    }
}