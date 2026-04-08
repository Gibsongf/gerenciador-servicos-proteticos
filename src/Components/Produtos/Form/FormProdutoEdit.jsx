import React from "react";
import style from "../../../Styles/Form.module.css";
import sectionStyle from "../../../Styles/Home.module.css";
import useForm from "../../../Hooks/useForm";
import { ProdutoContext } from "../../../Context";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { Input } from "../../Form/Input";
import { USER_PUT } from "../../../Api";

const FormProdutoEdit = () => {
  const { id } = useParams();
  const { setUpdate, storedProduto } = React.useContext(ProdutoContext);
  const nome = useForm(true, "", storedProduto.nome);
  const normal = useForm(true, "", storedProduto.valor_normal);
  const reduzido = useForm(false, "", storedProduto.valor_reduzido);
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

    const { url, options } = USER_PUT("produto", id, obj);
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
    submit().then((result) => {
      if (result) {
        nav("/produto");
      }
    });
  };
  const onCancel = (e) => {
    e.preventDefault();
    nav("/produto");
  };
  return (
    <section className={sectionStyle.container}>
      <h1>Adicionar Produto</h1>
      <form className={style.form} onSubmit={onSubmit} action="">
        <div className={style.formDiv}>
          <Input
            label="Nome *"
            type="text"
            name="nome"
            required={true}
            {...nome}
          />
        </div>
        <div className={style.formDiv}>
          <Input
            label="Valor Normal *"
            type="number"
            name="valor_normal"
            required={true}
            {...normal}
          />
        </div>
        <div className={style.formDiv}>
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

export default FormProdutoEdit;
