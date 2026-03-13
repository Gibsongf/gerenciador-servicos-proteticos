let apiUrl = "http://localhost:3000";
// import { loginData } from "./TODO/loginData";

function setupFetch(url, reqMethod = "get") {
  const reqConfig = {
    method: reqMethod,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage["token"],
    },
  };
  return reqConfig;
}
export function GET_LIST_CONTENT(category) {
  const options = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage["token"],
    },
  };
  const url = "http://localhost:3000/api/" + category + "/todos";
  return { url, options };
}
