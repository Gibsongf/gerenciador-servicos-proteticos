import React from "react";
import style from "./Button.module.css";
const ButtonAdd = ({ text }) => {
  return <button className={style.buttonAdd}>{text}</button>;
};

export default ButtonAdd;
