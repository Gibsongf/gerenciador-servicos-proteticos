import React from "react";
import style from "./Input.module.css";

const SelectTabela = ({ onChange }) => {
  return (
    <div className={style.container}>
      <label className={style.label} htmlFor="tabela">
        Tabela
      </label>
      <select
        className={style.inputStatus}
        onChange={onChange}
        defaultValue={"normal"}
        name="tabela"
        id="tabela">
        <option value="normal">Normal</option>
        <option value="reduzida">Reduzida</option>
      </select>
    </div>
  );
};

export default SelectTabela;
