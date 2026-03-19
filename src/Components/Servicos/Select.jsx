import React from "react";
import { ServiceContext } from "../../Context";
import style from "./Select.module.css";

export const SelectDentist = () => {
  // const { request, data } = useFetch();
  const { setFilter, cliente } = React.useContext(ServiceContext);
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
export const SelectClinic = () => {
  const { setFilter, local } = React.useContext(ServiceContext);

  const onChange = ({ target }) => {
    setFilter((filter) => {
      // console.log(target.name, target.value);
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
      <label htmlFor="local">Clínicas: </label>

      <select
        className={style.select}
        onChange={onChange}
        defaultValue=""
        name={"local"}
        id={"local"}>
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
