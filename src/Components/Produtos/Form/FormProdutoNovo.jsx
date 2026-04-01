import React from "react";
import style from "../../../Styles/Form.module.css";
import sectionStyle from "../../../Styles/Home.module.css";
import useForm from "../../../Hooks/useForm";
import { ProdutoContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { Input } from "../../Form/Input";
import { USER_POST } from "../../../Api";

const FormProdutoNovo = () => {
  const { setUpdate } = React.useContext(ProdutoContext);
  const nome = useForm(true);
  const normal = useForm(true);
  const reduzido = useForm(false);
  const { request, error, loading } = useFetch();
  const nav = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      nome: nome.value,
      valor_normal: normal.value,
      valor_reduzido: reduzido.value,
    };
    Object.keys(obj).forEach((k) => {
      if (!obj[k]) {
        delete obj[k];
      }
    });
    const { url, options } = USER_POST("produto", obj);
    const submit = async () => {
      const { response, json, fetchError } = await request(url, options);
      if (response.ok) {
        setUpdate((update) => update + 1);
        alert(json.message);
        return true;
      } else if (fetchError) {
        alert(fetchError);
      } else {
        alert(error);
      }

      return false;
    };
    if (submit()) {
      nav("/produto");
    }
  };
  const onCancel = (e) => {
    e.preventDefault();
    nav("/produto");
  };
  return (
    <section className={sectionStyle.container}>
      <h1>Adicionar Clínica</h1>
      <form className={style.form} onSubmit={onSubmit} action="">
        <div className={style.formSelect}>
          <Input
            label="Nome *"
            type="text"
            name="nome"
            required={true}
            {...nome}
          />
        </div>
        <div className={style.formSelect}>
          <Input
            label="Valor Normal *"
            type="number"
            name="valor_normal"
            required={true}
            {...normal}
          />
        </div>
        <div className={style.formSelect}>
          <Input
            label="Valor Reduzida"
            type="number"
            name="valor_normal"
            required={false}
            {...reduzido}
          />
        </div>
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

export default FormProdutoNovo;
