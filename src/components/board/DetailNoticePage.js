import React, { Component } from 'react';
import postRequest from "../../lib/PostRequest";

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
    }; 
  }

  componentDidMount(){
    const id = this.props.location.state.id

    const resultBoard = postRequest.getDetail(id);
    resultBoard.then(result=>{
      console.log(result[1][0].originalname)
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

  download = (e) =>{
    const downloadData = postRequest.downloadFile(e.target.value)
    console.log(downloadData)
  }
  
  render(){
    const fileInform=
    <>
      <div>첨부파일</div>
      {this.state.files.length!==0?(this.state.files.map((file)=>(
        <div key={file.id} className="detailFile">
          {file.originalname.indexOf('png')===-1&&file.originalname.indexOf('jpg')===-1?
          (<a href={file.url} key={file.url} download>{file.originalname}</a>):
          <button key={file.url} onClick={this.download} value={file.originalname}>{file.originalname}</button>
          }
        </div>))):
        <div className="detailFile">
          <div>없음</div>
        </div>
      }
    </>

    const postInform=
    <>
      {this.state.datas.length!==0?(this.state.datas.map((data)=>(
          <div className="detailHeader" key={data.id}>
            <div className="detailTitle" key={data.title}>{data.title}</div>
            {fileInform}
            <div className="detailInf" key={data}><p key="관리자">관리자</p><p key={data.date}>{data.date}</p>조회:{data.inquiry}</div>
            <PostContents content={this.state.description} key={this.state.description}/>
          </div>))):
          <div>
            Loading...
          </div>
        }
    </>
    return(
      <>
        {postInform}
      </>
    )
  }
}
 
export default DetailNoticePage;