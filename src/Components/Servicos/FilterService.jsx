import React from "react";
import { ServicoContext } from "../../Context";
import useMedia from "../../Hooks/useMedia";
import { SelectClinic } from "../Form/SelectClinic";
import { SelectDentist } from "../Form/SelectDentist";
import { Link } from "react-router-dom";
import btnStyle from "../../Styles/Button.module.css";
import style from "../../Styles/Filter.module.css";

// select date , select all dentist select clinics
const FilterService = () => {
  const { saveFilter, local, cliente } = React.useContext(ServicoContext);
  const mobile = useMedia();
  return (
    <div className={style.filterContainer}>
      <SelectClinic mobile={mobile} saveFilter={saveFilter} local={local} />
      <SelectDentist
        mobile={mobile}
        saveFilter={saveFilter}
        cliente={cliente}
      />
      {!mobile && (
        <Link className={btnStyle.buttonAdd} to={"/servico/novo"}>
          Add Serviço
        </Link>
      )}
    </div>
  );
};

export default FilterService;
