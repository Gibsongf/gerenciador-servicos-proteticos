import React from "react";
// import { SelectDentist } from "./SelectDentist";
// import { SelectClinic } from "./SelectClinic";
import style from "../../Styles/FilterService.module.css";
import useMedia from "../../Hooks/useMedia";
import { Link } from "react-router-dom";
import btnStyle from "../../Styles/Button.module.css";

// select date , select all dentist select clinics
const Filter = () => {
  const mobile = useMedia();

  return (
    <div className={style.filterContainer}>
      {!mobile && (
        <Link className={btnStyle.buttonAdd} to={"/clinica/novo"}>
          Add Clínica
        </Link>
      )}
    </div>
  );
};

export default Filter;
