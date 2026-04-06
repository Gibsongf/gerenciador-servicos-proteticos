import React from "react";
import style from "./Select.module.css";

export const FilterSelectDentist = ({
  mobile = false,
  filter = false,
  onChange,
  cliente,
  value,
}) => {
  return (
    <div className={style.selectContainer}>
      <label htmlFor="cliente">Dentistas: </label>
      <select
        className={style.select}
        onChange={onChange}
        value={value}
        name="cliente"
        id="cliente">
        {mobile && (
          <option selected disabled>
            Dentistas
          </option>
        )}
        <option value="">Todos Dentistas</option>
        {cliente &&
          cliente.map((item, i) => {
            if (filter.local) {
              if (filter.local === item.local) {
                return (
                  <option key={i} value={item._id}>
                    {item.nome}
                  </option>
                );
              }
              return "";
            }
            return (
              <option key={i} value={item._id}>
                {item.nome}
              </option>
            );
          })}
      </select>
    </div>
  );
};
