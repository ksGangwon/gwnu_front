import React, {Component} from 'react';
import './Fnb.css'
import loginRequest from "../lib/LoginRequest";
import $ from "jquery";
import {} from "jquery.cookie";

class Fnb extends Component{

    constructor(props) {
        super(props);
        this.state = {
            buttonDisplay: "none"
          };
      }

    componentDidMount(){
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
            display: this.state.buttonDisplay
          };
        return(
            <div className="fnbContainer minMax">
                <div className="popup ">
                    <div className="popupImg"><img src={process.env.PUBLIC_URL+'/images/popup/banner1.png'} alt="배너사진"/></div>
                    <div className="popupImg"><img src={process.env.PUBLIC_URL+'/images/popup/banner2.png'} alt="배너사진"/></div>
                    <div className="popupImg"><img src={process.env.PUBLIC_URL+'/images/popup/banner3.png'} alt="배너사진"/></div>
                    <div className="popupImg"><img src={process.env.PUBLIC_URL+'/images/popup/banner4.png'} alt="배너사진"/></div>
                    <div className="popupImg"><img src={process.env.PUBLIC_URL+'/images/popup/banner5.png'} alt="배너사진"/></div>
                    <div className="popupImg"><img src={process.env.PUBLIC_URL+'/images/popup/banner6.png'} alt="배너사진"/></div>
                </div>

                <div className="footerContainer">
                    <div className="footer">
                        <p>*사단법인 강원산학융합원</p>
                        <p>강원도 원주시 산학협력단 강원 산학융합본부</p>
                        <p>T.000-0000-0000~0 F.000-0000-0000 E.이메일@naver.com</p>
                        <p>Copyright(c) 강원산학융합본부 All Right Reserved</p>
                        <p>
                            <button className="logoutBtn" style={buttonStyle} onClick={this.logout}>
                                관리자 로그아웃
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fnb;