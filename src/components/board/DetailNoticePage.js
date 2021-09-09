import React, { Component } from 'react';
import postRequest from "../../lib/PostRequest";

// const PostContents = ({content}) =>{
//   <div
//     className="ck-content"
//     dangerouslySetInnerHTML={{ __html: content }}
//   ></div>
// }
//test
class DetailNoticePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      files:[],
      datas:[],
    }; 
  }

  componentDidMount(){
    const id = this.props.location.state.id

    const resultBoard = postRequest.getDetail(id);
    resultBoard.then(result=>{
      this.setState({datas:this.state.datas.concat(result[0])})
      this.setState({files:this.state.files.concat(result[1][0])})
    })
  }
  
  render(){
    const fileInform=
    <>
      {this.state.files.length!==0?(this.state.files.map((file)=>(
        <div>
          <div>첨부파일</div>
          <a href={file.url} download>{file.originalname}</a>
        </div>))):
        <div>
          <div>첨부파일</div>
          <>없음</>
        </div>
      }
    </>

    const postInform=
    <>
      {this.state.datas.length!==0?(this.state.datas.map((data)=>(
          <div>
            <div>{data.title}</div>
            {fileInform}
            <div><p>관리자</p><p>{data.date}</p>조회:{data.inquiry}</div>
            <div>없음</div>
            {/* <PostContents content={data.description}/> */}
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