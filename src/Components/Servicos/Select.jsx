import PropTypes from "prop-types";
import React from "react";
import useFetch from "../../Hooks/useFetch";
import { GET_LIST_CONTENT } from "../../Api";
import { ServiceContext } from "../../Context";
export const SelectDentist = () => {
  // const { request, data } = useFetch();
  const { setFilter, cliente } = React.useContext(ServiceContext);
  const onChange = ({ target }) => {
    setFilter((filter) => {
      return { ...filter, [target.name]: target.value };
    });
  };

  return (
    <select onChange={onChange} defaultValue="" name={"cliente"} id={"cliente"}>
      <option value="">Todos Dentistas</option>
      {cliente &&
        cliente.map((item, i) => (
          <option key={i} value={item.nome}>
            DR.{item.nome}
          </option>
        ))}
    </select>
  );
};
export const SelectClinic = () => {
  const { setFilter, local } = React.useContext(ServiceContext);

  const onChange = ({ target }) => {
    setFilter((filter) => {
      return { ...filter, [target.name]: target.value };
    });
  };
  return (
    <select onChange={onChange} defaultValue="" name={"clinica"} id={"clinica"}>
      <option value="">Todas Clínicas</option>
      {/* {data &&
        data.all.map((item, i) => (
          <option key={i} value={item.nome}>
            {item.nome}
          </option>
        ))} */}
    </select>
  );
};
