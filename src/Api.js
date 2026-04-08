let apiUrl = "http://localhost:3000/api/";
// import { loginData } from "./TODO/loginData";

export function GET_LIST_CONTENT(category) {
  const options = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage["token"],
    },
  };
  const url = apiUrl + category + "/todos";
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
  const url = apiUrl + "servico/" + id;
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
  const url = apiUrl + category + "/novo";
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
  const url = apiUrl + category + "/" + id + "/edit";
  return { url, options };
}

export function USER_DELETE(category, id) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage["token"],
    },
  };
  const url = apiUrl + category + "/" + id;
  return { url, options };
}
export function USER_LOGIN(loginData) {
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  };

  const url = "http://localhost:3000/user/login";
  return { url, options };
}
export function USER_ACC_PUT(data, id) {
  const options = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const url = "http://localhost:3000/user/edit/" + id;
  return { url, options };
}
export function GET_USER_DATA(token) {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const url = "http://localhost:3000/user/";
  return { url, options };
}
export function TOKEN_VALIDATE_POST(token) {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const url = "http://localhost:3000/user/validate";
  return { url, options };
}

export function EXPORT_MONTH_SERVICE(data) {
  const params = new URLSearchParams(data);

  const url = `http://localhost:3000/api/exportar?${params.toString()}`;
  const options = {
    method: "Get",
    headers: {
      Authorization: "Bearer " + localStorage["token"],
    },
  };
  return { url, options };
}
