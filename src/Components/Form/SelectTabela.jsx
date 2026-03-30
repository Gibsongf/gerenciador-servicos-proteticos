import React from "react";
import style from "./Input.module.css";

const SelectTabela = ({ onChange, value = "normal" }) => {
  return (
    <div className={style.container}>
      <label className={style.label} htmlFor="tabela">
        Tabela
      </label>
      <select
        className={style.inputStatus}
        onChange={onChange}
        value={value}
        name="tabela"
        id="tabela">
        <option value="Normal">Normal</option>
        <option value="Reduzido">Reduzida</option>
      </select>
    </div>
  );
};

export default SelectTabela;
