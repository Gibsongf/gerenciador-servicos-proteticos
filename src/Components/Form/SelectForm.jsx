import React from "react";
// import style from "./Select.module.css";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { GET_LIST_CONTENT } from "../../Api";
export const FormSelect = ({ setValue, value, type, label, localFilter }) => {
  const { onChange, error } = useForm();
  const { request } = useFetch();
  React.useEffect(() => {
    const req = async () => {
      const { url, options } = GET_LIST_CONTENT(type);
      let { json } = await request(url, options);
      setValue(json);
    };
    req();
  }, [request, setValue, type, localFilter]);

  return (
    <div>
      <label htmlFor="cliente">{label}</label>
      <select onChange={onChange} defaultValue="" name={type} id={type}>
        {localFilter ? (
          <>
            <option disable="true" value="">
              Selecione um Dentista
            </option>
            {value &&
              value.all.map((item, i) => {
                if (item.local.nome === localFilter)
                  return (
                    <option key={i} value={item.nome}>
                      {item.nome}
                    </option>
                  );
              })}
          </>
        ) : (
          <option disable="true" value="">
            Selecione um Local
          </option>
        )}
      </select>
      {error && <p>{error}</p>}
    </div>
  );
};

export const FormSelectLocal = ({ onChange, error, type, label }) => {
  const [data, setData] = React.useState();
  const { request } = useFetch();
  React.useEffect(() => {
    const req = async () => {
      const { url, options } = GET_LIST_CONTENT(type);
      let { json } = await request(url, options);

      setData(json);
    };
    req();
  }, [request, setData, type]);

  return (
    <div>
      <label htmlFor="cliente">{label}</label>
      <select onChange={onChange} defaultValue="" name={type} id={type}>
        <option disable="true" value="">
          Selecione um Local
        </option>
        {data &&
          data.all.map((item, i) => (
            <option key={i} value={item.nome}>
              {item.nome}
            </option>
          ))}
      </select>
      {error && <p>{error}</p>}
    </div>
  );
};
