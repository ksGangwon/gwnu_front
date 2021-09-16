// import React, { Component } from 'react';
// import './DetailPage.css'
// import * as functions from './functions.js'
// class InformPage extends Component {

//     render() {
//         const {detail, number}= this.props.match.params;
//         return (
//             <div>
//                 <div className="detailHighContainer minMax">
//                         <img src={process.env.PUBLIC_URL+"/images/detail/background.jpg"} alt="배경화면"/>
//                     <div className="detailHighText">
//                         <h1>{functions.pageName(detail)}</h1>
//                     </div>
//                 </div>

//                 <div className="detailMenuContainer minMax">
//                     <div className="detailMenuBox">
//                         <div className="detailMenu">
//                             <p className="detailMenuPtag">{functions.pageName(detail)}</p>
//                             <div className="detailMenuItem">
//                                 <p>{functions.pageDetailName(detail, number)}</p>
//                                 <img src={process.env.PUBLIC_URL+"/images/detail/bottom_arrow.png"} alt="화살표"/>
//                                 <div className="detailMenuUi">
//                                     {functions.pageList(detail)}
//                                 </div>
//                             </div>
//                             <div className="detailMenuSpace"></div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="contentContainer minMax">
//                     <div className="content">
//                         {functions.informPageLoder(number)}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default InformPage;