let apiUrl = "http://localhost:3000/api";
// import { loginData } from "./TODO/loginData";

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

export function GET_CONTENT_BY_ID(id, category) {
  const options = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage["token"],
    },
  };
  const url = apiUrl + "/servico/" + id;
  return { url, options };
}

export function USER_POST(category, body) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage["token"],
    },
    body: JSON.stringify(body),
  };
  const url = "http://localhost:3000/api/" + category + "/novo";
  return { url, options };
}

export function USER_PUT(category, id, body) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage["token"],
    },
    body: JSON.stringify(body),
  };
  const url = "http://localhost:3000/api/" + category + "/" + id + "/edit";
  return { url, options };
}
