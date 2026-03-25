import React from "react";
import { ServicoContext } from "../../../Context";
import style from "./Select.module.css";

export const SelectDentist = () => {
  // const { request, data } = useFetch();
  const { setFilter, cliente } = React.useContext(ServicoContext);
  const onChange = ({ target }) => {
    setFilter((filter) => {
      if (!target.value) {
        const newFilter = { ...filter };
        delete newFilter[target.name];
        return { ...newFilter };
      }
      return { ...filter, [target.name]: target.value };
    });
  };

  return (
    <div className={style.selectContainer}>
      <label htmlFor="cliente">Dentistas: </label>
      <select
        className={style.select}
        onChange={onChange}
        defaultValue=""
        name="cliente"
        id="cliente">
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
