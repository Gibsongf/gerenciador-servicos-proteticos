import React from "react";

import useForm from "../../../Hooks/useForm";
import Input from "../../Form/Input";
import { FormSelect, FormSelectLocal } from "../../Form/SelectForm";
import { ProductSelect } from "../../Form/SelectProduct";
import style from "./ServiceNew.module.css";
import { StatusDelivery } from "../../Form/SelectFinishService";
import { todayDate } from "../../../utils";
import useFetch from "../../../Hooks/useFetch";
import { USER_POST } from "../../../Api";
import { ServiceContext } from "../../../Context";
import { useNavigate } from "react-router-dom";

const ServiceNew = () => {
  const { setUpdate } = React.useContext(ServiceContext);
  const paciente = useForm();
  const data = useForm();
  const produto = useForm();
  const cliente = useForm();
  const local = useForm();
  const status = useForm();
  const [renderProducts, setRenderProducts] = React.useState([]);
  const formRef = React.useRef();
  const nav = useNavigate();
  const { request, error, loading } = useFetch();

  const onSubmit = (e) => {
    e.preventDefault();
    let produtos = Object.keys(produto.value).map((k) => {
      return { produto: produto.value[k][0], quantidade: produto.value[k][1] };
    });
    const obj = {
      paciente: paciente.value,
      cliente: cliente.value,
      local: local.value,
      statusEntrega: status.value ? status.value : false,
      dataRegistro: data.value,
      produtos,
    };

    const { url, options } = USER_POST("servico", obj);
    const submit = async () => {
      const { response, json } = await request(url, options);
      if (response.ok) {
        setUpdate((update) => [...update, 1]);
        alert(json.message);
        return true;
      }
      alert(error);

      return false;
    };
    if (submit()) {
      nav("/servico");
    }
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
    data.setValue(todayDate());
  }, []);
  return (
    <>
      <h1>Adicionar Serviço</h1>

      <form ref={formRef} className={style.form} onSubmit={onSubmit}>
        <div className={style.formSelect}>
          <Input
            label="Paciente"
            type="text"
            name="paciente"
            required={true}
            {...paciente}
          />
          <Input
            label="Data"
            type="date"
            name="data"
            required={false}
            {...data}
          />
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
          <button className={style.btnSalvar} disabled={loading}>
            Salvar
          </button>
        </div>
      </form>
    </>
  );
};

export default ServiceNew;
