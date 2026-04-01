import React from "react";
import style from "./Select.module.css";

export const SelectDentist = ({ mobile = false, saveFilter, cliente }) => {
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
