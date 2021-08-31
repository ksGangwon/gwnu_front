import axios from 'axios';

const API_DEFAULT = "http://localhost:8080/";
const instance = axios.create({ baseURL: API_DEFAULT });

export async function addPost(title, description, category){
    console.log('addPost함수 호출됨');
    const postData = await instance.post("/board/uploadFile", {title, description, category});
    return postData.data;
}

export async function getPost(){
    console.log('getPost함수 호출됨');
    const postData = await instance.get("/board/getPost", {});
    return postData.data;
}


export default{
    addPost,
    getPost,
}