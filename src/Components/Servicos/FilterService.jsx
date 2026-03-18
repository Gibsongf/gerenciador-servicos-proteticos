import React from "react";
import { SelectClinic, SelectDentist } from "./Select";
import style from "./FilterService.module.css";
import useMedia from "../../Hooks/useMedia";
import BtnShowForm from "../ButtonAdd";

// select date , select all dentist select clinics
const FilterService = () => {
  const mobile = useMedia();
  return (
    <div className={style.navContainer}>
      <SelectDentist />
      <SelectClinic />
      {!mobile && <BtnShowForm text={"Add Serviço"} />}
    </div>
  );
};

// Input.PropTypes = {
//   name: PropTypes.string.isRequired,
//   options: PropTypes.array.isRequired,
// };
export default FilterService;
