import React from "react";
import { USER_DELETE } from "../Api";
import useFetch from "./useFetch";

const useContentAction = (item, setUpdate, saveInfo, category, title) => {
  const { request } = useFetch();
  const onClickDelete = () => {
    const msg = `Deseja deletar este ${title}?`;
    console.log(title, category);
    const confirm = window.confirm(msg);
    const deleteItem = async () => {
      const { url, options } = USER_DELETE(category, item._id);
      const { json } = await request(url, options);
      alert(json.message);
      setUpdate((n) => n + 1);
    };
    if (confirm) {
      deleteItem();
    }
  };
  const onClickEdit = () => {
    saveInfo(item);
  };
  return { onClickEdit, onClickDelete };
};

export default useContentAction;
