import axios from 'axios';
import S3 from 'react-aws-s3'
import S3config from './S3config'

const API_DEFAULT = "http://localhost:8080/";
const instance = axios.create({ baseURL: API_DEFAULT });
const ReactS3Client = new S3(S3config);

//게시글 추가
export async function addPost(title, description, category, file, url){
    console.log('addPost함수 호출됨');
    console.log(url)
    const postData = await instance.post("/board", {title, description, category, file , url});
    return postData.data;
}

//파일 업로드
export async function upload(file){
    console.log('upload함수 호출됨');
    const postData = await ReactS3Client.uploadFile(file,file.name)
    return postData.location;
}

//게시글 불러오기
export async function getPost(page,category){
    console.log('getPost함수 호출됨');
    const postData = await instance.get("/board", {params:{page:page, category:category}});
    return postData.data;
}

//게시글 불러오기
export async function getDetail(id){
    console.log('getDetail함수 호출됨');
    const postData = await instance.get(`/board/${id}`);
    return postData.data;
    
}

//같은 이름의 파일 업로드 방지
export async function findFile(originalname){
    console.log('findFile함수 호출됨');
    const postData = await instance.post("/board/file", {originalname});
    return postData.data;
}

//
export async function downloadFile(originalname){
    console.log('downloadFile함수 호출됨');
    const postData = await instance.get(`/files/${originalname}`);
    return postData.data;
}

//게시글 수정
export async function updatePost(id,title,description,category){
    console.log('updatePost함수 호출됨'+id);
    const postData = await instance.put(`/board/${id}`,{title,description,category});
    return postData.data;
}

//게시글 삭제
export async function deletePost(id){
    console.log('deletePost함수 호출됨'+id);
    const postData = await instance.delete(`/board/${id}`);
    return postData.data;
}


export default{
    addPost,
    getPost,
    upload,
    findFile,
    getDetail,
    downloadFile,
    updatePost,
    deletePost
}