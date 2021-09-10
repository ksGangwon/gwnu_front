import React, { Component } from 'react';
import CommonTable from './CommonTable';
import CommonTableColumn from './CommonTableColumn';
import CommonTableRow from './CommonTableRow';
import postRequest from "../../lib/PostRequest";
import './NoticePage.css';

//test
class NoticePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        posts:[],
        pages:[],
        pageClicked:0,
        categoryClicked:"all"
      }; 
  }

  componentDidMount(){
    this.newLoad(this.state.pageClicked,this.state.categoryClicked);
    var str ="abcdefg"
    console.log(str)
  }

  //카테고리 버튼 이벤트
  categoryClick = (e) =>{
    this.setState({categoryClicked:e.target.value});
    this.setState({pages:[]})
    this.newLoad(0,e.target.value);
  }

  //페이지 선택 이벤트
  pageClick = (e) =>{
    this.setState({pageClicked:e.target.value});
    this.setState({posts:[]})

    const resultBoard = postRequest.getPost(e.target.value,this.state.categoryClicked);
    resultBoard.then(result=>{
      for(var i=0;i<result.length;i++){
        this.setState({posts:this.state.posts.concat(result[i])})
      }
    })
  }

  firstPage = () =>{
    this.pageLoad(this.state.pages[0],0)
  }

  forwardPage = () =>{
    this.pageLoad(this.state.pageClicked-1,0)
  }

  backPage = () =>{
    var length = this.state.pages.length-1
    this.pageLoad(this.state.pageClicked+1,this.state.pages[length])
  }

  finalPage = () =>{
    var length = this.state.pages.length-1
    this.pageLoad(this.state.pages[length],this.state.pages[length])
  }
  
  newLoad = (page,category) =>{
    const resultBoard = postRequest.getPost(page,category);
    this.setState({pageClicked:0})
    this.setState({posts:[]})
    var pageNum;

    resultBoard.then(result=>{
      var length = result.length;

      if(result.length>0){
        if(result[0].number%10!==0){
          pageNum = parseInt(result[0].number / 10);
        } else{
          pageNum = result[0].number / 10 - 1;
        }
      } else{
        pageNum = 0
      }

      for(var i=0;i<length;i++){
        this.setState({posts:this.state.posts.concat(result[i])})
      }

      for(var j=0; j<=pageNum; j++){
        this.setState({pages:this.state.pages.concat(j)})
      }
      
    })
  }

  pageLoad = (page,checkpage) =>{
    if(this.state.pageClicked!==checkpage){
      this.setState({pageClicked:page})
      this.setState({posts:[]})

      const resultBoard = postRequest.getPost(page,this.state.categoryClicked);
      resultBoard.then(result=>{
        for(var i=0;i<result.length;i++){
          this.setState({posts:this.state.posts.concat(result[i])})
        }
      })
    } else {
      window.location.replace("/#/page/notion/1")
    }
  }

  render(){
    const postInform = 
    <>
    {this.state.posts.length!==0?(this.state.posts.map((post)=>(
      <CommonTableRow key={post.id.toString()} id={post.id}>
        <CommonTableColumn key={post.number+100}>{post.number}</CommonTableColumn>
        <CommonTableColumn key={post.category}>{post.category}</CommonTableColumn>
        <CommonTableColumn key={post.title}>{post.title}</CommonTableColumn>
        <CommonTableColumn key={post.date}>{post.date}</CommonTableColumn>
        <CommonTableColumn key={post.description}>관리자</CommonTableColumn>
        <CommonTableColumn key={post.inquiry}>{post.inquiry}</CommonTableColumn>
      </CommonTableRow>))):
      <CommonTableRow>
        <CommonTableColumn></CommonTableColumn>
        <CommonTableColumn></CommonTableColumn>
        <CommonTableColumn>등록된 게시물이 없습니다.</CommonTableColumn>
        <CommonTableColumn></CommonTableColumn>
        <CommonTableColumn></CommonTableColumn>
        <CommonTableColumn></CommonTableColumn>
      </CommonTableRow>
    }
    </>

    const pageInform=
    <div className="bottomBtnList">
      <button className="pageBtn" onClick={this.firstPage}>&lt; &lt; </button>
      <button className="pageBtn" onClick={this.forwardPage}>&lt; </button>
      {this.state.pages.map((page)=>(
          <button className={this.state.pageClicked===page?"pageClick":"pageUnClick"} value={page.toString()} key={page.toString()} onClick={this.pageClick}>{page+1}</button>
      ))}
      <button className="pageBtn" onClick={this.backPage}>&gt; </button>
      <button className="pageBtn" onClick={this.finalPage}>&gt; &gt; </button>
    </div>

    return(
      <>
        <div className="categoryList">
          <button className={this.state.categoryClicked==="all"?"categoryClick":"categoryUnClick"} value="all" onClick={this.categoryClick}>전체</button>
          <button className={this.state.categoryClicked==="임의 카테고리1"?"categoryClick":"categoryUnClick"} value="임의 카테고리1" onClick={this.categoryClick}>카테고리1</button>
          <button className={this.state.categoryClicked==="임의 카테고리2"?"categoryClick":"categoryUnClick"} value="임의 카테고리2" onClick={this.categoryClick}>카테고리2</button>
          <button className={this.state.categoryClicked==="임의 카테고리3"?"categoryClick":"categoryUnClick"} value="임의 카테고리3" onClick={this.categoryClick}>카테고리3</button>
        </div>
        <CommonTable headersName={['번호', '분류', '제목', '등록일', '글쓴이','조회']}>
          {postInform}
        </CommonTable>
        {pageInform}
    </>
    )
  }
}
 
export default NoticePage;