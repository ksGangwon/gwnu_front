import React, {Component} from 'react';
import './Fnb.css'
class Fnb extends Component{
    render(){
        return(
            <div className="fnbContainer">
                <div className="popupContainer">
                    <div className="popup">
                        <div className="popupImg"><img src="images/popup/banner1.png"/></div>
                        <div className="popupImg"><img src="images/popup/banner2.png"/></div>
                        <div className="popupImg"><img src="images/popup/banner3.png"/></div>
                        <div className="popupImg"><img src="images/popup/banner4.png"/></div>
                        <div className="popupImg"><img src="images/popup/banner5.png"/></div>
                        <div className="popupImg"><img src="images/popup/banner6.png"/></div>
                    </div>
                </div>

                <div className="footerContainer">
                    <div className="footer">
                        <p>*사단법인 강원산학융합원</p>
                        <p>강원도 원주시 산학협력단 강원 산학융합본부</p>
                        <p>T.000-0000-0000~0 F.000-0000-0000 E.이메일@naver.com</p>
                        <p>Copyright(c) 강원산학융합본부 All Right Reserved</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fnb;