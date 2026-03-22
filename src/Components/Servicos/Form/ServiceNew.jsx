import React from "react";

import useForm from "../../../Hooks/useForm";
import Input from "../../Form/Input";
import { FormSelect, FormSelectLocal } from "../../Form/SelectForm";
import { ProductSelect } from "../../Form/SelectProduct";
import style from "./ServiceNew.module.css";
import { StatusDelivery } from "../../Form/SelectFinishService";

const ServiceNew = () => {
  const paciente = useForm();
  const data = useForm();
  const produto = useForm();
  const cliente = useForm();
  const local = useForm();
  const status = useForm();
  const [renderProducts, setRenderProducts] = React.useState([]);
  const refCheckbox = React.useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(produto);
    let produtos = [];
    if (!refCheckbox.current) return "";

    const obj = {
      paciente: paciente.value,
      cliente: cliente.value,
      local: local.value,
      status: status.value,
      produtos,
    };
  };
  const onCancel = (e) => {
    e.preventDefault();
  };
  const removeProduct = (e) => {
    e.preventDefault();
    const indx = Number(e.target.dataset.index);
    if (indx >= 1) {
      setRenderProducts((lst) => {
        let copy = [...lst];
        copy[indx] = "";
        return copy;
      });
      produto.setValue((obj) => {
        delete obj[String(indx)];
        return { ...obj };
      });
    }
  };

  const onClickAddProduct = (e) => {
    e.preventDefault();
    setRenderProducts((lst) => [
      ...lst,
      <ProductSelect
        index={lst.length}
        removeProduct={removeProduct}
        key={lst.length}
        label={"Produtos"}
        {...produto}
      />,
    ]);
  };

  React.useEffect(() => {
    setRenderProducts([
      <ProductSelect
        removeProduct={removeProduct}
        index={0}
        key={0}
        label={"Produtos"}
        {...produto}
      />,
    ]);
  }, []);
  return (
    <>
      <h1>Adicionar Serviço</h1>

      <form className={style.form}>
        <div className={style.formSelect}>
          <Input label="Paciente" type="text" name="paciente" {...paciente} />
          <Input label="Data" type="date" name="data" {...data} />
        </div>
        {/* remove value from cliente when local change with setCliente */}
        <div className={style.formSelect}>
          <FormSelectLocal
            setCliente={cliente.setValue}
            label={"Clínicas"}
            type={"local"}
            {...local}
          />
          <FormSelect
            localFilter={local.value}
            label={"Dentista"}
            type={"cliente"}
            {...cliente}
          />
        </div>

        <div className={style.containerProduct}>
          <h4>Produtos</h4>
          {renderProducts.map((Select) => Select)}
        </div>
        <button onClick={onClickAddProduct} className={style.btnAddProduct}>
          + Adicionar Produto
        </button>
        <StatusDelivery {...status} />
        <div className={style.btnContainer}>
          <button onClick={onCancel} className={style.btnClose}>
            Cancelar
          </button>
          <button onClick={onSubmit} className={style.btnSalvar}>
            Salvar
          </button>
        </div>
      </form>
    </>
  );
};

export default ServiceNew;
