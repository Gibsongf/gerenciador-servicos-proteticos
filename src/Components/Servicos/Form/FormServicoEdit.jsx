import React from "react";
import { Input } from "../../Form/Input";
import { FormSelectDentist, FormSelectLocal } from "../../Form/SelectForm";
import { ProductSelect } from "../../Form/SelectProduct";
import style from "./FormServico.module.css";
import { StatusDelivery } from "../../Form/SelectFinishService";
import useFetch from "../../../Hooks/useFetch";
import { USER_PUT } from "../../../Api";
import { ServicoContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ProductSelectEdit } from "../../Form/SelectProductEdit";
import useFormEditar from "../../../Hooks/useFormEditar";
import sectionStyle from "../../../Styles/Home.module.css";

const FormServicoEdit = () => {
  const { id } = useParams();
  const { setUpdate, serviceDetails } = React.useContext(ServicoContext);
  const paciente = useFormEditar(serviceDetails.paciente);
  const date = useFormEditar(serviceDetails.dataRegistro);
  const produto = useFormEditar(serviceDetails.produtos);
  const local = useFormEditar(serviceDetails.local._id);
  const cliente = useFormEditar(serviceDetails.cliente._id);
  const [renderProducts, setRenderProducts] = React.useState([]);
  const status = useFormEditar(serviceDetails.statusEntrega);
  const nav = useNavigate();
  const { request, error, loading } = useFetch();

  const onSubmit = (e) => {
    e.preventDefault();
    // object with index as keys for the product state form
    let produtos = Object.keys(produto.value).map((k) => {
      if (produto.value[k].length) {
        return {
          produto: produto.value[k][0],
          quantidade: produto.value[k][1],
        };
      } else {
        return {
          produto: produto.value[k].produto._id,
          quantidade: produto.value[k].quantidade,
        };
      }
    });
    const obj = {
      paciente: paciente.value,
      cliente: cliente.value,
      local: local.value,
      statusEntrega: status.value ? status.value : false,
      dataRegistro: date.value,
      produtos,
    };

    const { url, options } = USER_PUT("servico", id, obj);
    const submit = async () => {
      const { response, json } = await request(url, options);
      if (response.ok) {
        setUpdate((update) => update + 1);
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
    nav("/servico");
  };

  const removeProduct = (e) => {
    e.preventDefault();
    // we pass the current target index in the array renderProducts
    // with dataset, retrieve it and use it for removal of that target
    // from the list of rendered products
    // and use the index as key of the produto value form to remove it from there
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
    setRenderProducts(() => {
      return produto.value.map((p, i) => (
        <ProductSelectEdit
          index={i}
          removeProduct={removeProduct}
          key={i}
          label={"Produtos"}
          {...produto}
        />
      ));
    });
  }, []);

  return (
    <section className={sectionStyle.container}>
      <h1>Adicionar Serviço</h1>

      <form className={style.form} onSubmit={onSubmit}>
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
            {...date}
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
          <FormSelectDentist
            localFilter={local.value}
            label={"Dentista"}
            type={"cliente"}
            {...cliente}
          />
        </div>

        <div className={style.containerProduct}>
          <h4>Produtos</h4>
          {renderProducts.map((select) => select)}
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
    </section>
  );
};

export default FormServicoEdit;
