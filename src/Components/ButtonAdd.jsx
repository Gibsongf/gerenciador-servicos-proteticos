import React from "react";
import style from "./Button.module.css";
import { ServiceContext } from "../Context";
const BtnShowForm = ({ text }) => {
  const { setModal } = React.useContext(ServiceContext);
  const onClick = () => {
    setModal(true);
  };
  return (
    <button onClick={onClick} className={style.buttonAdd}>
      {text}
    </button>
  );
};

export default BtnShowForm;
