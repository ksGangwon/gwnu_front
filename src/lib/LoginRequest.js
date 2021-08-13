import axios from 'axios';

const API_DEFAULT = "http://localhost:8080/";
const instance = axios.create({ baseURL: API_DEFAULT });

export async function getLogin(userId, password){
    console.log('getLogin함수 호출됨');
    console.log(userId);
    console.log(password);
    const userData = await instance.post("/auth/login", {id:userId,password:password});
    return userData.data;
}

export default{
    getLogin,
}
