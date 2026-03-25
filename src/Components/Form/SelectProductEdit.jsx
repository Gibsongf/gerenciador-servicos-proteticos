import React from "react";
import style from "./SelectProduct.module.css";
import useFetch from "../../Hooks/useFetch";
import { GET_LIST_CONTENT } from "../../Api";

export const ProductSelectEdit = ({
  setValue,
  error,
  index,
  removeProduct,
  value,
}) => {
  const { request } = useFetch();
  const [data, setData] = React.useState();
  const [quantity, setQuantity] = React.useState(value[index].quantidade);
  const [currValue, setCurrValue] = React.useState(value[index].produto._id);
  React.useEffect(() => {
    const req = async () => {
      const { url, options } = GET_LIST_CONTENT("produto");
      const { json } = await request(url, options);
      setData(json);
    };

    req();
  }, [request]);

  const onChange = ({ target }) => {
    setCurrValue(target.value);

    setValue((obj) => {
      let copy = { ...obj };
      copy[index] = [target.value, quantity];
      return copy;
    });
  };
  const quantityChange = ({ target }) => {
    setQuantity(() => Number(target.value));
    setValue((obj) => {
      let copy = { ...obj };
      copy[index] = [currValue, Number(target.value)];
      return copy;
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
          id={"produto-" + index}>
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
        <label className={style.label} htmlFor={"quantity-" + index}>
          Quantidade
        </label>
        <input
          onChange={quantityChange}
          className={style.input}
          type="number"
          name="quantity"
          id={"quantity-" + index}
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
