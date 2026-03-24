import React from "react";
import { SelectClinic, SelectDentist } from "./Select";
import style from "./FilterService.module.css";
import useMedia from "../../../Hooks/useMedia";
// import BtnShowForm from "../ButtonAdd";
import { Link } from "react-router-dom";
import btnStyle from "../../Button/Button.module.css";

// select date , select all dentist select clinics
const FilterService = () => {
  const mobile = useMedia();
  return (
    <div className={style.navContainer}>
      <SelectDentist />
      <SelectClinic />
      {!mobile && (
        <Link className={btnStyle.buttonAdd} to={"/servico/novo"}>
          Add Serviço
        </Link>
      )}
    </div>
  );
};

// Input.PropTypes = {
//   name: PropTypes.string.isRequired,
//   options: PropTypes.array.isRequired,
// };
export default FilterService;
