import React from "react";
import { ServicoContext } from "../../../Context";
import style from "./Select.module.css";

export const SelectDentist = ({ mobile = false }) => {
  const { saveFilter, cliente } = React.useContext(ServicoContext);

  return (
    <div className={style.selectContainer}>
      <label htmlFor="cliente">Dentistas: </label>
      <select
        className={style.select}
        onChange={saveFilter}
        defaultValue=""
        name="cliente"
        id="cliente">
        {mobile && (
          <option selected disabled>
            Dentistas
          </option>
        )}
        <option value="">Todos Dentistas</option>
        {cliente &&
          cliente.map((item, i) => (
            <option key={i} value={item.nome}>
              DR.{item.nome}
            </option>
          ))}
      </select>
    </div>
  );
};
