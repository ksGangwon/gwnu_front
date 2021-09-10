import axios from "axios";

const API_DEFAULT = "http://localhost:8080/";
const instance = axios.create({ baseURL: API_DEFAULT });
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

export async function board(title, description) {
  console.log("notice Request");
  const userData = await instance.post(
    "/board",
    { title: title, description: description },
    { headers }
  );
  return userData.data;
}

// export async function getLogout() {
//   console.log("getLogout함수 호출됨");
//   const userData = await instance.get("/auth/logout", {}, { headers });
//   return userData.data;
// }

export default {
  board,
  //getLogout,
};
