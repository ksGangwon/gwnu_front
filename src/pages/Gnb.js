import React, {Component} from 'react';
import './Gnb.css'
import { NavLink } from "react-router-dom";
import loginRequest from "../lib/LoginRequest";
import $ from "jquery";
import {} from "jquery.cookie";

class Gnb extends Component{
    constructor(props) {
        super(props);
        this.state = {
            buttonDisplay: "none"
          };
      }

    componentDidMount(){
        console.log("ㅇㅇ"+$.cookie("loginData"))
        if ($.cookie("loginData")) {
            this.setState({
              buttonDisplay: "block"
            });
          } else {
            this.setState({
              buttonDisplay: "none"
            });
          }
      }

      logout = () => {
        const resultLogout = loginRequest.getLogout()

        resultLogout.then(result=>{
            console.log(result.message)
            if(result.message){
                alert("로그아웃 되었습니다")
                $.removeCookie("loginData");
                window.location.href = "/";
            } else{
                alert("로그아웃에 실패했습니다")
            }
        }
        )
    };

    render(){
        const buttonStyle = {
            margin: "0px 5px 0px 10px",
            display: this.state.buttonDisplay
          };
        
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
                <button style={buttonStyle} onClick={this.logout} variant="dark">
                    로그아웃
                </button>
            </div>
        </div>
        )
    }
}

export default Gnb;