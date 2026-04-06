import React from "react";
import style from "./Select.module.css";

export const SelectClinic = ({ mobile = false, saveFilter, local }) => {
  return (
    <div className={style.selectContainer}>
      <label htmlFor="local">Clínicas: </label>

      <select
        className={style.select}
        onChange={saveFilter}
        defaultValue=""
        name={"local"}
        id={"local"}>
        {mobile && (
          <option selected disabled>
            Clínicas
          </option>
        )}
        <option value="">Todas Clínicas</option>
        {local &&
          local.map((item, i) => (
            <option key={i} value={item._id}>
              {item.nome}
            </option>
          ))}
      </select>
    </div>
  );
};
