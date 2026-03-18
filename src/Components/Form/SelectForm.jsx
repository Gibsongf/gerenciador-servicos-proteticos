import React from "react";
import style from "./Input.module.css";
import useFetch from "../../Hooks/useFetch";
import { GET_LIST_CONTENT } from "../../Api";
export const FormSelect = ({ type, label, localFilter, onChange, error }) => {
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
        defaultValue=""
        name={type}
        id={type}>
        {localFilter ? (
          <>
            <option disabled={true} value="">
              Selecione um Dentista
            </option>
            {data &&
              data.all.map((item, i) => {
                if (item.local._id === localFilter)
                  return (
                    <option key={i} value={item._id}>
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
  React.useEffect(() => {
    // remove cliente value from select cliente in case of changes in value of local
    // ex:user select local and a cliente but decide to change to another local but forget to change cliente too, it will get a error on api side
    setCliente("");
  }, [value, setCliente]);
  return (
    <div className={style.container}>
      <label className={style.label} htmlFor="cliente">
        {label}
      </label>
      <select
        className={style.input}
        required={true}
        onChange={onChange}
        defaultValue=""
        name={type}
        id={type}>
        <option disabled={true} value="">
          Selecione um Local
        </option>
        {data &&
          data.all.map((item, i) => (
            <option key={i} value={item._id}>
              {item.nome}
            </option>
          ))}
      </select>
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};
