import React, { Component } from 'react';
import './DetailPage.css'
class DetailPage extends Component {
    render() {
        return (
            <div>
                <div className="highContainer">
                        <img src="/images/detail/background.jpg"/>
                    <div className="highText">
                        <h1>융합원</h1>
                    </div>
                </div>

                <div className="highMenuContainer">
                    <div className="highMenuBox">
                        <div className="highMenu">
                            <p className="highMenuPtag">융합원소개</p>
                            <div className="highMenuItem">
                                <p>융합원소개</p>
                                <img src="/images/detail/bottom_arrow.png"/>
                                <ui className="highMenuUi">
                                    <a><li className="highMenuLi">학습프로그램</li></a>
                                    <a><li className="highMenuLi">교과과정</li></a>
                                    <a><li className="highMenuLi">중소기업</li></a>
                                    <a><li className="highMenuLi">대학체제개편</li></a>
                                </ui>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contentContainer">
                    <div className="contentBox">
                        <div className="contentHeader">
                            <h1>인사말</h1>
                            <div className="contentHeaderText">작성자 강원산학융합본부</div>
                        </div>
                        <div className="content">
                            <img src="/images/detail/사업소개.png"/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default DetailPage;