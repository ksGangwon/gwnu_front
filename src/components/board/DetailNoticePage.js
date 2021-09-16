import React, { Component } from 'react';
import postRequest from "../../lib/PostRequest";
import $ from "jquery";
import {} from "jquery.cookie";
import { withRouter } from 'react-router-dom';
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
      buttonDisplay: "none",
      prevId:0,
      prevTitle:"이전 글이 없습니다.",
      afterId:0,
      afterTitle:"다음 글이 없습니다."
    }; 
  }

  //브라우저 앞뒤버튼, 이전/이후 글 이동 이벤트 
  componentDidUpdate(_prevProps,prevState){
    if(_prevProps.match.params.id !== this.props.match.params.id){
      window.location.reload();
    }
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

    const {divide, id} = this.props.match.params;
    const resultBoard = postRequest.getDetail(divide,id);

    resultBoard.then(result=>{

      console.log(result)

      // description을 제외한 나머지 저장
      this.setState({datas:this.state.datas.concat(result[0])})

      // description 저장 , img처리
      var resultDescription = this.foundImg(result[0].description,result[1])

      if(result[0].description){
        this.setState({description:resultDescription})
      } else{
        this.setState({description:result[0].description})
      }
      
      // file 저장
      for(var i=0; i<result[1].length; i++){
        this.setState({files:this.state.files.concat(result[1][i])})
      }

      // 이전/이후 글 저장
      if(result[2].length>0){
        if(result[2][0].id<id){
          this.setState({prevId:result[2][0].id})
          this.setState({prevTitle:result[2][0].title})
          if(result[2].length===2){
            this.setState({afterId:result[2][1].id})
            this.setState({afterTitle:result[2][1].title})
          }
        } else{
          this.setState({afterId:result[2][0].id})
          this.setState({afterTitle:result[2][0].title})
        }
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
    this.props.history.push({
      pathname: `/Detail/${this.props.match.params.divide}/${this.state.prevId}`
    })
  }

  afterPost = () =>{
    this.props.history.push({
      pathname: `/Detail/${this.props.match.params.divide}/${this.state.afterId}`
    })
  }

  updatePost = () =>{
    const {divide, id} = this.props.match.params;
    const postData = postRequest.getDetail(divide, id);
    postData.then(result=>{
      if(result[0].id!="undefined"){
        this.props.history.push({pathname:"/page/notion/11", state:"edit", divide:this.props.divide, data:result[0]})
      } else{
        alert("게시물 수정화면으로 이동할 수 없습니다.")
      }
    })
  }

  deletePost = () =>{
    const postData = postRequest.deletePost(this.props.match.params.id)
    postData.then(result=>{
      if(!result.message){
        window.location.replace(`/#/page/notion/${this.props.match.params.divide}`)
      } else{
        alert("게시물 삭제 실패했습니다")
      }
    })
  }
 
  render(){

    const buttonStyle = {
      display: this.state.buttonDisplay
    };

    const fileInform=
    <>
    <div className="detailFile">
      첨부파일
      {this.state.files.length!==0?(this.state.files.map((file,index)=>(
        <>
        <div className="fileInf" key={file.originalname}>
          <a href={file.url} key={file.url} download> &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; {file.originalname}</a>
          {/* <button key={file.url} onClick={this.downloadFile} value={file.originalname}>{file.originalname}</button> */}
        </div>
        <div className="clear" key={index}></div>
        </>
        ))):
        <>&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; 없음</>
      }
      </div>
    </>

    const postInform=
    <>
      {this.state.datas.length!==0?(this.state.datas.map((data)=>(
          <div className="detailHeader" key={data.id}>
            <div className="detailTitle" key={data.title}>{data.title}</div>
            {fileInform}
            <div className="detailInf" key={data.date}>
              <div className="detailDate">관리자 &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;{data.date} </div>
              <div className="detailInquiry">조회 {data.inquiry}</div>
              <div className="clear"></div>
            </div>
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
          <div className="detailList">
            {this.state.prevTitle!=="이전 글이 없습니다."?(
              <div className="detailOrder" onClick={this.previousPost}>이전글 &nbsp;  &nbsp; &nbsp; &nbsp; {this.state.prevTitle}</div>):
              <div className="detailOrder">이전글 &nbsp;  &nbsp; &nbsp; &nbsp; {this.state.prevTitle}</div>
            }
            {this.state.afterTitle!=="다음 글이 없습니다."?(
              <div className="detailOrder" onClick={this.afterPost}>다음글 &nbsp;  &nbsp; &nbsp; &nbsp; {this.state.afterTitle}</div>):
              <div className="detailOrder">다음글 &nbsp;  &nbsp; &nbsp; &nbsp; {this.state.afterTitle}</div>
            }
          </div>
          <button onClick={this.updatePost} className="editBtn" style={buttonStyle}>수정</button>
          <button onClick={this.deletePost} className="deleteBtn" style={buttonStyle}>삭제</button>
          <button onClick={()=>window.location.replace(`/#/page/notion/${this.props.match.params.divide}`)} className="listBtn">목록</button>
        </div>
      </div>
    )
  }
}
 
export default withRouter(DetailNoticePage);