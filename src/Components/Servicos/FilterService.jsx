import React from "react";
import { SelectClinic, SelectDentist } from "./Select";
import style from "./FilterService.module.css";
import useMedia from "../../Hooks/useMedia";
import ButtonAdd from "../ButtonAdd";

// select date , select all dentist select clinics
const FilterService = () => {
  const mobile = useMedia();
  return (
    <div className={style.navContainer}>
      <SelectDentist />
      <SelectClinic />
      {!mobile && <ButtonAdd text={"Add Serviço"} />}
    </div>
  );
};

// Input.PropTypes = {
//   name: PropTypes.string.isRequired,
//   options: PropTypes.array.isRequired,
// };
export default FilterService;
