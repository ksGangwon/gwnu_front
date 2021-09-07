import React, { Component } from 'react';
import CommonTable from './CommonTable';
import CommonTableColumn from './CommonTableColumn';
import CommonTableRow from './CommonTableRow';
import postRequest from "../../lib/PostRequest";
import './DetailNoticePage.css';

class DetailNoticePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        posts:[],
        pages:[],
        isClicked:1,
      }; 
  }

  componentDidMount(){
    const resultBoard = postRequest.getPost();

    resultBoard.then(result=>{
      var length = result.length;
      var pageNum = parseInt(length / 10)+1;
      console.log(pageNum);

      for(var i=0;i<length;i++){
        this.setState({posts:this.state.posts.concat(result[i])})
      }

      for(var j=1; j<=pageNum; j++){
        this.setState({pages:this.state.pages.concat(j)})
      }
      
    })
  }

  categoryClick = (e) =>{
    this.setState({isClicked:e.target.value})
  }

  pageClick = (e) =>{
    this.setState({isClicked:e.target.value})
  }

  render(){
    const postInform = 
    <>
    {this.state.posts.length!=0?(this.state.posts.map((post)=>(
      <CommonTableRow>
        <CommonTableColumn key={post.number.toString()}>{post.number}</CommonTableColumn>
        <CommonTableColumn key={post.category}>{post.category}</CommonTableColumn>
        <CommonTableColumn key={post.title}>{post.title}</CommonTableColumn>
        <CommonTableColumn key={post.date}>{post.date}</CommonTableColumn>
        <CommonTableColumn key={post.description}>관리자</CommonTableColumn>
        <CommonTableColumn key={post.inquiry}>{post.inquiry}</CommonTableColumn>
      </CommonTableRow>))):
      <CommonTableRow>
        <CommonTableColumn></CommonTableColumn>
        <CommonTableColumn></CommonTableColumn>
        <CommonTableColumn></CommonTableColumn>
        <CommonTableColumn>등록된 게시물이 없습니다.</CommonTableColumn>
        <CommonTableColumn></CommonTableColumn>
        <CommonTableColumn></CommonTableColumn>
      </CommonTableRow>
    }
    </>

    const pageInform=
    <div className="bottomBtnList">
      <button className="pageBtn">&lt; &lt; </button>
      <button className="pageBtn">&lt; </button>
      {this.state.pages.map((page)=>(
          <button className={this.state.isClicked==page?"pageClick":"pageUnClick"} value={page.toString()} key={page.toString()} onClick={this.pageClick}>{page}</button>
      ))}
      <button className="pageBtn">&gt; </button>
      <button className="pageBtn">&gt; &gt; </button>
    </div>

    return(
      <>
        <div className="categoryList">
          <button className={this.state.isClicked==1?"categoryClick":"categoryUnClick"} value="1" onClick={this.categoryClick}>전체</button>
          <button className={this.state.isClicked==2?"categoryClick":"categoryUnClick"} value="2" onClick={this.categoryClick}>카테고리1</button>
          <button className={this.state.isClicked==3?"categoryClick":"categoryUnClick"} value="3" onClick={this.categoryClick}>카테고리2</button>
          <button className={this.state.isClicked==4?"categoryClick":"categoryUnClick"} value="4" onClick={this.categoryClick}>카테고리3</button>
        </div>
        <CommonTable headersName={['번호', '분류', '제목', '등록일', '글쓴이','조회']}>
          {postInform}
        </CommonTable>
        {pageInform}
    </>
    )
  }
}
 
export default DetailNoticePage;