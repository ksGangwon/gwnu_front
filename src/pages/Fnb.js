import React, {Component} from 'react';
import './Fnb.css'
class Fnb extends Component{
    render(){
        return(
            <div className="fnbContainer">
                <div className="popupContainer">
                    <div className="popup">
                        <div className="popupImg"><img src={process.env.PUBLIC_URL+'/images/popup/banner1.png'} alt="배너사진"/></div>
                        <div className="popupImg"><img src={process.env.PUBLIC_URL+'/images/popup/banner2.png'} alt="배너사진"/></div>
                        <div className="popupImg"><img src={process.env.PUBLIC_URL+'/images/popup/banner3.png'} alt="배너사진"/></div>
                        <div className="popupImg"><img src={process.env.PUBLIC_URL+'/images/popup/banner4.png'} alt="배너사진"/></div>
                        <div className="popupImg"><img src={process.env.PUBLIC_URL+'/images/popup/banner5.png'} alt="배너사진"/></div>
                        <div className="popupImg"><img src={process.env.PUBLIC_URL+'/images/popup/banner6.png'} alt="배너사진"/></div>
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