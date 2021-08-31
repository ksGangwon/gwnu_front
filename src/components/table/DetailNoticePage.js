import React, { useEffect, useState } from 'react';
import CommonTable from './CommonTable';
import CommonTableColumn from './CommonTableColumn';
import CommonTableRow from './CommonTableRow';
import postRequest from "../../lib/PostRequest";
 
const DetailNoticePage = () => {

  const [posts,setPosts] = useState([])

  useEffect(()=>{
    const resultBoard = postRequest.getPost();

  },[])

  const postInform = posts.map((post)=>{
    <CommonTableRow>
      <CommonTableColumn>{post.id}</CommonTableColumn>
      <CommonTableColumn>{post.title}</CommonTableColumn>
      <CommonTableColumn>{post.date}</CommonTableColumn>
      <CommonTableColumn>관리자</CommonTableColumn>
      <CommonTableColumn>{post.views}</CommonTableColumn>
    </CommonTableRow>
  })
  return (
    <>
      <CommonTable headersName={['글번호', '제목', '등록일', '글쓴이','조회수']}>
        <CommonTableRow>
          <CommonTableColumn>1</CommonTableColumn>
          <CommonTableColumn>첫번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2020-10-25</CommonTableColumn>
          <CommonTableColumn>관리자</CommonTableColumn>
          <CommonTableColumn>6</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </>
  )
}
 
export default DetailNoticePage;