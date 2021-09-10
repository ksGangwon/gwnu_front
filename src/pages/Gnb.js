import React, {Component} from 'react';
import './Gnb.css'
import {Link} from 'react-router-dom';

class Gnb extends Component{
    state=({
        hiddenMenu:true
    })
    constructor(props) {
        super(props);
        console.log("시작이요")
      }

    handleToggle = () => {
        this.setState({
            hiddenMenu:!this.state.hiddenMenu
        })
    }

    menuClose = () => {
        this.setState({
            hiddenMenu:true
        })
    }
    

    render(){
        const style = {
            display: "none"
        }
        this.state.hiddenMenu ? style.display="none" : style.display="inline-block"
        
        return(
        <div className="gnbContainer minMax">
            <Link to="/"><img src={process.env.PUBLIC_URL+'/images/logo.png'} alt="산학 융합원 로고"/></Link>
            <span onClick={this.handleToggle}><i className="fas fa-list"/></span>
            <div className="gnbMenu">
                <div className="gnbMenuList">
                    <Link to="/page/introduce/1">융합원 소개</Link>
                    <div className="gnbHiddenUi"  id="hiddenUi1">
                        <img src={process.env.PUBLIC_URL+'/images/high_arrow.png'}alt="화살표"/>
                        <Link to="/page/introduce/1"><p>인사말</p></Link>
                        <Link to="/page/introduce/2"><p>사업소개</p></Link>
                        <Link to="/page/introduce/3"><p>주요연혁</p></Link>
                        <Link to="/page/introduce/4"><p>조직도</p></Link>
                        <Link to="/page/introduce/5"><p>CI소개</p></Link>
                        <Link to="/page/introduce/6"><p>참여기관</p></Link>
                        <Link to="/page/introduce/7"><p>오시는 길</p></Link>
                    </div>
                </div>
                <div className="gnbMenuList">
                    <Link to="/page/business/1">산학융합촉진사업</Link>
                    <div className="gnbHiddenUi" id="hiddenUi2">
                        <img src={process.env.PUBLIC_URL+'/images/high_arrow.png'}alt="화살표"/>
                        <Link to="/page/business/1"><p>근로자평생학습프로그램</p></Link>
                        <Link to="/page/business/2"><p>현장맞춤형교과과정운영</p></Link>
                        <Link to="/page/business/3"><p>중소기업역량강화</p></Link>
                        <Link to="/page/business/4"><p>대학체제 개편</p></Link>
                    </div>
                </div>
                <div className="gnbMenuList">
                    <Link to="/page/area/1">강원산학융합지구</Link>
                    <div className="gnbHiddenUi" id="hiddenUi3">
                        <img src={process.env.PUBLIC_URL+'/images/high_arrow.png'}alt="화살표"/>
                        <Link to="/page/area/1"><p>강원산학융합지구시설</p></Link>
                        <Link to="/page/area/2"><p>기업연구관안내</p></Link>
                    </div>
                </div>
                <div className="gnbMenuList">
                    <Link to="/page/notion/1">알림마당</Link>
                    <div className="gnbHiddenUi" id="hiddenUi4">
                        <img src={process.env.PUBLIC_URL+'/images/high_arrow.png'}alt="화살표"/>
                        <Link to="/page/notion/1"><p>공지사항</p></Link>
                        <Link to="/page/notion/2"><p>교육및사업안내</p></Link>
                        <Link to="/page/notion/3"><p>보도자료</p></Link>
                        <Link to="/page/notion/4"><p>포토갤러리</p></Link>
                        <Link to="/page/notion/5"><p>자료실</p></Link>
                    </div>
                </div>
            </div>


            
            <div className="gnbHiddenContainer" style={style}>
                <div className="gnbHiddenMenu">
                    <div className="gnbHiddenMenuUi col2">
                        <h4>융합원 소개</h4>
                        <Link to="/page/introduce/1" onClick={this.menuClose}><p>인사말</p></Link>
                        <Link to="/page/introduce/2" onClick={this.menuClose}><p>사업소개</p></Link>
                        <Link to="/page/introduce/3" onClick={this.menuClose}><p>주요연혁</p></Link>
                        <Link to="/page/introduce/4" onClick={this.menuClose}><p>조직도</p></Link>
                        <Link to="/page/introduce/5" onClick={this.menuClose}><p>CI소개</p></Link>
                        <Link to="/page/introduce/6" onClick={this.menuClose}><p>참여기관</p></Link>
                        <Link to="/page/introduce/7" onClick={this.menuClose}><p>오시는 길</p></Link>
                    </div>
                    <div className="gnbHiddenMenuUi col4">
                        <h4>산학융합촉진사업</h4>
                        <Link to="/page/business/1" onClick={this.menuClose}><p>근로자평생학습프로그램</p></Link>
                        <Link to="/page/business/2" onClick={this.menuClose}><p>현장맞춤형교과과정운영</p></Link>
                        <Link to="/page/business/3" onClick={this.menuClose}><p>중소기업역량강화</p></Link>
                        <Link to="/page/business/4" onClick={this.menuClose}><p>대학체제 개편</p></Link>
                    </div>
                    <div className="gnbHiddenMenuUi col4">
                        <h4>강원산학융합지구</h4>    
                        <Link to="/page/area/1" onClick={this.menuClose}><p>강원산학융합지구시설</p></Link>
                        <Link to="/page/area/2" onClick={this.menuClose}><p>기업연구관안내</p></Link>
                    </div>
                    <div className="gnbHiddenMenuUi col2" >
                        <h4>알림마당</h4>
                        <Link to="/page/notion/1" onClick={this.menuClose}><p>공지사항</p></Link>
                        <Link to="/page/notion/2" onClick={this.menuClose}><p>교육및사업안내</p></Link>
                        <Link to="/page/notion/3" onClick={this.menuClose}><p>보도자료</p></Link>
                        <Link to="/page/notion/4" onClick={this.menuClose}><p>포토갤러리</p></Link>
                        <Link to="/page/notion/5" onClick={this.menuClose}><p>자료실</p></Link>
                    </div>
                </div>
            </div>
        
        </div>
        )
    }
}

export default Gnb;