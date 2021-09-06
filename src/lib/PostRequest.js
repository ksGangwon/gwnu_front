import axios from 'axios';
import S3 from 'react-aws-s3'
import S3config from './S3config'

const API_DEFAULT = "http://localhost:8080/";
const instance = axios.create({ baseURL: API_DEFAULT });
const ReactS3Client = new S3(S3config);

export async function addPost(title, description, category, file, url){
    console.log('addPost함수 호출됨');
    const postData = await instance.post("/board", {title, description, category, file , url});
    return postData.data;
}

export async function upload(file){
    console.log('upload함수 호출됨');
    const postData = await ReactS3Client.uploadFile(file,file.name)
    return postData.location;
}

export async function getPost(){
    console.log('getPost함수 호출됨');
    const postData = await instance.get("/board/getPost", {});
    return postData.data;
}

export async function findFile(originalname){
    console.log('findFile함수 호출됨');
    const postData = await instance.post("/board/file", {originalname});
    return postData.data;
}


export default{
    addPost,
    getPost,
    upload,
    findFile
}