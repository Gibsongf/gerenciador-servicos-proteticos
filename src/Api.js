let apiUrl = "https://gerenciador-servicos-protetico-api.onrender.com";

export function GET_LIST_CONTENT(category) {
  const options = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage["token"],
    },
  };
  // const url = apiUrl + "api/" + category + "/todos";
  const url = `${apiUrl}/api/${category}/todos`;
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
  // const url = apiUrl + "servico/" + id;
  const url = `${apiUrl}/api/${category}/${id}`;

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
  const url = `${apiUrl}/api/${category}/novo`;
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
  const url = `${apiUrl}/api/${category}/${id}/edit`;

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
  const url = `${apiUrl}/api/${category}/${id}`;

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

  const url = `${apiUrl}/user/login`;

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

  // const url = apiUrl + "user/edit/" + id;
  const url = `${apiUrl}/user/edit/${id}`;

  return { url, options };
}
export function GET_USER_DATA(token) {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  // const url = apiUrl + "user/";
  const url = `${apiUrl}/user/`;

  return { url, options };
}
export function TOKEN_VALIDATE_POST(token) {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const url = apiUrl + "user/validate";
  return { url, options };
}

export function EXPORT_MONTH_SERVICE(data) {
  const params = new URLSearchParams(data);

  const url = `${apiUrl}/api/exportar?${params.toString()}`;
  const options = {
    method: "Get",
    headers: {
      Authorization: "Bearer " + localStorage["token"],
    },
  };
  return { url, options };
}
