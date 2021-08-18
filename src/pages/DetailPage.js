import React, { Component } from 'react';
import './DetailPage.css'
import * as functions from './functions.js'
class DetailPage extends Component {

    render() {
        const {detail, number}= this.props.match.params;
        console.log(detail,number)
        return (
            <div>
                <div className="highContainer">
                        <img src={process.env.PUBLIC_URL+"/images/detail/background.jpg"} alt="배경화면"/>
                    <div className="highText">
                        <h1>{functions.pageName(detail)}</h1>
                    </div>
                </div>

                <div className="highMenuContainer">
                    <div className="highMenuBox">
                        <div className="highMenu">
                            <p className="highMenuPtag">{functions.pageName(detail)}</p>
                            <div className="highMenuItem">
                                <p>{functions.pageDetailName(detail, number)}</p>
                                <img src={process.env.PUBLIC_URL+"/images/detail/bottom_arrow.png"} alt="화살표"/>
                                <div className="highMenuUi">
                                    {functions.pageList(detail)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contentContainer">
                    <div className="contentBox">
                        <div className="contentHeader">
                            <h1>{functions.pageDetailName(detail, number)}</h1>
                            <div className="contentHeaderText">작성자 강원산학융합본부</div>
                        </div>
                        <div className="content">
                            {functions.pageLoder(detail, number)}
                            
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default DetailPage;