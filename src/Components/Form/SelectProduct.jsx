import React from "react";
import style from "./SelectProduct.module.css";
import useFetch from "../../Hooks/useFetch";
import { GET_LIST_CONTENT } from "../../Api";
import { CheckBox } from "./CheckBox";

export const ProductSelect = ({ setValue, error, index, removeProduct }) => {
  const { request } = useFetch();
  const [data, setData] = React.useState();
  const [quantity, setQuantity] = React.useState(1);
  const [currValue, setCurrValue] = React.useState("");
  React.useEffect(() => {
    const req = async () => {
      const { url, options } = GET_LIST_CONTENT("produto");
      const { json } = await request(url, options);
      setData(json);
    };
    req();
    console.log(index);
  }, [request]);

  const onChange = ({ target }) => {
    if (!target.value) return;
    setCurrValue(target.value);
    setValue((obj) => {
      return { ...obj, [index]: [target.value, quantity] };
    });
  };
  const quantityChange = (e) => {
    if (!currValue) return;

    setQuantity(e.target.value);
    setValue((obj) => {
      return { ...obj, [index]: [currValue, quantity] };
    });
  };

  return (
    <div className={style.selectContainer}>
      <div className={style.productContainer}>
        <select
          className={style.input}
          required={true}
          onChange={onChange}
          value={currValue}
          name={"produto"}
          id={"produto"}>
          <option disabled={true} value="">
            Selecione Produtos
          </option>
          {data &&
            data.all.map((item, i) => (
              <option key={i} value={item._id} id={item._id}>
                {item.nome}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label className={style.label} htmlFor="quantity">
          Quantidade
        </label>
        <input
          onChange={quantityChange}
          className={style.input}
          type="number"
          name="quantity"
          id="quantity"
          value={quantity}
          min={1}
          max={20}
        />
      </div>
      <button
        onClick={removeProduct}
        data-index={index}
        className={style.btnRemoveProduct}>
        Remover
      </button>
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};
