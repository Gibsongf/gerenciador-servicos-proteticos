import React from "react";
import { ProdutoContext } from "../../Context";
import useMedia from "../../Hooks/useMedia";
import { SelectClinic } from "../Form/SelectClinic";
import style from "../../Styles/Filter.module.css";
import BtnAdd from "./ButtonAdd";

// select date , select all dentist select clinics
const FilterProduto = () => {
  const { saveFilter, local } = React.useContext(ProdutoContext);
  const mobile = useMedia();
  return (
    <div className={style.filterContainer}>
      {local && (
        <SelectClinic mobile={mobile} saveFilter={saveFilter} local={local} />
      )}

      <BtnAdd />
    </div>
  );
};

export default FilterProduto;
