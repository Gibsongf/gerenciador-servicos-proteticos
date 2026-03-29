import React from "react";
import { ServicoContext } from "../../../Context";
import style from "./Select.module.css";

export const SelectClinic = ({ mobile = false }) => {
  const { saveFilter, local } = React.useContext(ServicoContext);

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
            <option key={i} value={item.nome}>
              {item.nome}
            </option>
          ))}
      </select>
    </div>
  );
};
