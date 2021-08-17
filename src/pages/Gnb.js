import React, {Component} from 'react';
import './Gnb.css'
import { NavLink } from "react-router-dom";

class Gnb extends Component{

    render(){
        
        return(
        <div className="gnbContainer">
            <a href="/"><img src="images/logo.png" alt="산학 융합원 로고"/></a>
            <div className="gnbMenu">
                <div className="gnbMenuList">
                    <a htef="/">융합원 소개</a>
                    <div className="gnbHiddenUi"  id="hiddenUi1">
                        <img src="images/high_arrow.png"/>
                        <NavLink to={{pathname: "/Introduce"}}><li>인사말</li></NavLink>
                        <a href="/"><li>사업소개</li></a>
                        <a href="/"><li>주요연혁</li></a>
                        <a href="/"><li>조직도</li></a>
                        <a href="/"><li>CI소개</li></a>
                        <a href="/"><li>참여기관</li></a>
                        <a href="/"><li>오시는 길</li></a>
                    </div>
                </div>
                <div className="gnbMenuList">
                    <a htef="/">산학융합촉진사업</a>
                    <div className="gnbHiddenUi" id="hiddenUi2">
                        <img src="images/high_arrow.png"/>
                        <a href="/"><li>근로자평생학습프로그램</li></a>
                        <a href="/"><li>현장맞춤형교과과정운영</li></a>
                        <a href="/"><li>중소기업역량강화</li></a>
                        <a href="/"><li>대학체제 개편</li></a>
                    </div>
                </div>
                <div className="gnbMenuList">
                    <a htef="/">강원산학융합지구</a>
                    <div className="gnbHiddenUi" id="hiddenUi3">
                        <img src="images/high_arrow.png"/>
                        <a href="/"><li>강원산학융합지구시설</li></a>
                        <a href="/"><li>기업연구관안내</li></a>
                    </div>
                </div>
                <div className="gnbMenuList">
                    <a htef="/">알림마당</a>
                    <div className="gnbHiddenUi" id="hiddenUi4">
                        <img src="images/high_arrow.png"/>
                        <a href="/"><li>공지사항</li></a>
                        <a href="/"><li>교육및사업안내</li></a>
                        <a href="/"><li>보도자료</li></a>
                        <a href="/"><li>포토갤러리</li></a>
                        <a href="/"><li>자료실</li></a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Gnb;