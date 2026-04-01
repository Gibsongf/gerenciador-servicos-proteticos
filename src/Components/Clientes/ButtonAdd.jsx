import React from "react";
// import { SelectDentist } from "./SelectDentist";
// import { SelectClinic } from "./SelectClinic";
import style from "../../Styles/Filter.module.css";
import useMedia from "../../Hooks/useMedia";
import { Link } from "react-router-dom";
import btnStyle from "../../Styles/Button.module.css";

// select date , select all dentist select clinics
const BtnAdd = () => {
  const mobile = useMedia();

  return (
    <div className={style.filterContainer}>
      {!mobile && (
        <Link className={btnStyle.buttonAdd} to={"/cliente/novo"}>
          Add Cliente
        </Link>
      )}
    </div>
  );
};

export default BtnAdd;
