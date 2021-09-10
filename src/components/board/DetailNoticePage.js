import React, { Component } from 'react';
import postRequest from "../../lib/PostRequest";
import $ from "jquery";
import {} from "jquery.cookie";
import './DetailNoticePage.css';

function PostContents({content}){
  return(
  <div
    className="detailContent"
    dangerouslySetInnerHTML={{ __html: content }}
  ></div>
  );
}

class DetailNoticePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      files:[],
      datas:[],
      description:"",
      imgCnt:[],
      buttonDisplay: "none"
    }; 
  }

  componentDidMount(){

    if ($.cookie("loginData")) {
      this.setState({
        buttonDisplay: "inline"
      });
    } else {
      this.setState({
        buttonDisplay: "none"
      });
    }

    const id = this.props.location.state.id
    const resultBoard = postRequest.getDetail(id);

    resultBoard.then(result=>{

      //description을 제외한 나머지 저장
      this.setState({datas:this.state.datas.concat(result[0])})

      //description 저장 , img처리
      var resultDescription = this.foundImg(result[0].description,result[1])

      if(result[0].description){
        this.setState({description:resultDescription})
      } else{
        this.setState({description:result[0].description})
      }
      
      //file 저장
      for(var i=0; i<result[1].length; i++){
        this.setState({files:this.state.files.concat(result[1][i])})
      }
    })
  }

  foundImg = (str,file) =>{
    let pos=0;
    let resultDescription = str
    let srcImg;

    while(true){
      let foundPos = str.indexOf('<img>',pos);
      if(foundPos == -1) break;

      var imgWithSrc = str.slice(foundPos,foundPos+5)
      console.log(foundPos)
      for(var i=0;i<file.length;i++){
        console.log(file[i])
        srcImg = "<img src='"+file[i].url+"'/>"
        console.log(srcImg)
      }
      resultDescription = resultDescription.replace(imgWithSrc,srcImg)
      pos = foundPos +1;
    }

    return resultDescription

  }

  downloadFile = (e) =>{
    const downloadData = postRequest.downloadFile(e.target.value)
    console.log(downloadData)
  }

  previousPost = () =>{

  }

  afterPost = () =>{

  }

  editPost = (id) =>{

  }

  deletePost = (id) =>{

  }

  
  render(){

    const buttonStyle = {
      display: this.state.buttonDisplay
    };

    const fileInform=
    <>
    <div className="detailFile">
      첨부파일
      {this.state.files.length!==0?(this.state.files.map((file)=>(
        <div className="fileInf">
          <button key={file.url} onClick={this.downloadFile} value={file.originalname}>{file.originalname}</button>
        </div>
        ))):
        <>없음</>
      }
      </div>
    </>

    const postInform=
    <>
      {this.state.datas.length!==0?(this.state.datas.map((data)=>(
          <div className="detailHeader" key={data.id}>
            <div className="detailTitle" key={data.title}>{data.title}</div>
            {fileInform}
            <div className="detailInf" key={data}>관리자 {data.date} 조회:{data.inquiry}</div>
            <PostContents className="detailContent" content={this.state.description} key={this.state.description}/>
          </div>))):
          <div>
            Loading...
          </div>
        }
    </>
    return(
      <div className="detail">
        {postInform}
        <div className="detailFoot">
        <button onClick={this.editPost} className="editBtn" style={buttonStyle}>수정</button>
          <button onClick={this.deletePost} className="deleteBtn" style={buttonStyle}>삭제</button>
          <button onClick={this.previousPost} className="moveBtn1">&lt;</button>
          <button onClick={this.afterPost} className="moveBtn2">&gt;</button>
          <button onClick={()=>window.location.replace("/#/page/notion/1")} className="listBtn">목록</button>
        </div>
      </div>
    )
  }
}
 
export default DetailNoticePage;