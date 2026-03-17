import React from "react";
// import style from "./Select.module.css";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { GET_LIST_CONTENT } from "../../Api";

export const ProductSelect = ({ setClientes, clientes, type, label }) => {
  const { onChange, error } = useForm();
  const { request } = useFetch();
  React.useEffect(() => {
    const req = async () => {
      const { url, options } = GET_LIST_CONTENT("produto");
      const { json } = await request(url, options);
      setClientes(json);
    };
    req();
  }, [request, setClientes, type]);
  return (
    <div>
      <label htmlFor="cliente">{label}</label>
      <select onChange={onChange} defaultValue="" name={type} id={type}>
        <option disable="true" value="">
          Selecione um
        </option>
        {clientes &&
          clientes.all.map((item, i) => (
            <option key={i} value={item.nome}>
              {item.nome}
            </option>
          ))}
      </select>
      {error && <p>{error}</p>}
    </div>
  );
};
