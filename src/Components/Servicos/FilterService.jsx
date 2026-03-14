import React from "react";
import { SelectClinic, SelectDentist } from "./Select";
import style from "./Servicos.module.css";
import useMedia from "../../Hooks/useMedia";

// select date , select all dentist select clinics
const FilterService = () => {
  const mobile = useMedia();
  return (
    <div className={style.navContainer}>
      <SelectDentist />
      <SelectClinic />
      {!mobile && <button className={style.buttonAdd}>+ Serviço</button>}
    </div>
  );
};

// Input.PropTypes = {
//   name: PropTypes.string.isRequired,
//   options: PropTypes.array.isRequired,
// };
export default FilterService;
