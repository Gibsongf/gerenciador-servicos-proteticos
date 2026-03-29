import React from "react";
import { SelectDentist } from "./SelectDentist";
import { SelectClinic } from "./SelectClinic";
import style from "../../../Styles/FilterService.module.css";
import useMedia from "../../../Hooks/useMedia";
import { Link } from "react-router-dom";
import btnStyle from "../../../Styles/Button.module.css";

// select date , select all dentist select clinics
const FilterService = () => {
  const mobile = useMedia();
  return (
    <div className={style.filterContainer}>
      <SelectDentist mobile={mobile} />
      <SelectClinic mobile={mobile} />
      {!mobile && (
        <Link className={btnStyle.buttonAdd} to={"/servico/novo"}>
          Add Serviço
        </Link>
      )}
    </div>
  );
};

export default FilterService;
