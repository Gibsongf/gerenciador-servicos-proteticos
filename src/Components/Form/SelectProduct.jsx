import React from "react";
import style from "./Input.module.css";
import useFetch from "../../Hooks/useFetch";
import { GET_LIST_CONTENT } from "../../Api";
import { CheckBox } from "./CheckBox";

export const ProductSelect = ({ label, onChange, error, ref }) => {
  const { request } = useFetch();
  const [data, setData] = React.useState();
  const [listProduct, setListProduct] = React.useState([]);
  const selectRef = React.useRef();

  React.useEffect(() => {
    const req = async () => {
      const { url, options } = GET_LIST_CONTENT("produto");
      const { json } = await request(url, options);
      setData(json);
    };
    req();
  }, [request]);

  const onBtnClick = (e) => {
    e.preventDefault();
    let opt = Array.from(selectRef.current.children);
    opt.forEach((option) => {
      if (option.selected) {
        setListProduct((listProduct) => {
          return [...listProduct, option];
        });
      }
    });
  };

  return (
    <div className={style.selectContainer}>
      <label className={style.label} htmlFor="cliente">
        {label}
      </label>
      <select
        className={style.input}
        ref={selectRef}
        required={true}
        onChange={onChange}
        defaultValue=""
        name={"produto"}
        id={"produto"}>
        <option disabled={true} value="">
          Selecione Produtos
        </option>
        {data &&
          data.all.map((item, i) => (
            <option key={i} value={item.nome} id={item._id}>
              {item.nome}
            </option>
          ))}
      </select>
      <button className={style.btnProduct} onClick={onBtnClick}>
        ✔
      </button>
      <div ref={ref}>
        <CheckBox arr={listProduct} />
      </div>
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};
