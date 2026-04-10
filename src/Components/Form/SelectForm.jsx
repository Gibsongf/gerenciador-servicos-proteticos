import React from "react";
import style from "./Input.module.css";
import useFetch from "../../Hooks/useFetch";
import { GET_LIST_CONTENT } from "../../Api";
export const FormSelectDentist = ({
  type,
  label,
  localFilter,
  onChange,
  error,
  value,
}) => {
  const { request } = useFetch();
  const [data, setData] = React.useState();
  React.useEffect(() => {
    const req = async () => {
      const { url, options } = GET_LIST_CONTENT(type);
      let { json } = await request(url, options);
      setData(json);
    };
    req();
  }, [request, setData, type, localFilter]);
  return (
    <div className={style.container}>
      <label className={style.label} htmlFor="cliente">
        {label}
      </label>
      <select
        className={style.input}
        required={true}
        onChange={onChange}
        value={value}
        name={type}
        id={type}>
        {localFilter ? (
          <>
            <option disabled={true} value="">
              Selecione um Dentista
            </option>
            {data ? (
              data.all.map((item, i) => {
                if (item.local._id === localFilter)
                  return (
                    <option key={i} value={item._id}>
                      {item.nome}
                    </option>
                  );
              })
            ) : (
              <option>Carregando...</option>
            )}
          </>
        ) : (
          <option disable="true" value="">
            Selecione um Local
          </option>
        )}
      </select>
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};

export const FormSelectLocal = ({
  onChange,
  error,
  type,
  label,
  value,
  setCliente,
}) => {
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

  const selectOnChange = (e) => {
    onChange(e);
    setCliente("");
  };
  return (
    <div className={style.container}>
      <label className={style.label} htmlFor="local">
        {label}
      </label>
      <select
        className={style.input}
        required={true}
        onChange={selectOnChange}
        value={value}
        name={type}
        id={type}>
        <option disabled={true} value="">
          Selecione um Local
        </option>
        {data ? (
          data.all.map((item, i) => (
            <option key={i} value={item._id}>
              {item.nome}
            </option>
          ))
        ) : (
          <option>Carregando...</option>
        )}
      </select>
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};
