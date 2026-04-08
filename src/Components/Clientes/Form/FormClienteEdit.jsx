import React from "react";
import style from "../../../Styles/Form.module.css";
import sectionStyle from "../../../Styles/Home.module.css";
import useForm from "../../../Hooks/useForm";
import { ClienteContext } from "../../../Context";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { Input, InputTelefone } from "../../Form/Input";
import { USER_PUT } from "../../../Api";
import { FormSelectLocal } from "../../Form/SelectForm";

const FormClienteEdit = () => {
  const { setUpdate, storedCliente } = React.useContext(ClienteContext);
  const { id } = useParams();
  const nome = useForm(true, "", storedCliente.nome);
  const local = useForm(true, "", storedCliente.local._id);
  const telefone = useForm(false, "telefone", storedCliente.telefone);
  const { request, loading, error } = useFetch();
  const nav = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      nome: nome.value,
      local: local.value,
      telefone: telefone.value,
    };
    Object.keys(obj).forEach((k) => {
      if (!obj[k]) {
        delete obj[k];
      } else if (k === "telefone") {
        obj.telefone = telefone.value.replace(/\D/g, "");
      }
    });
    const { url, options } = USER_PUT("cliente", id, obj);

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
      nav("/cliente");
    }
  };
  const onCancel = (e) => {
    e.preventDefault();
    nav("/cliente");
  };
  return (
    <section className={sectionStyle.container}>
      <h1>Edição de Cliente</h1>
      <form className={style.form} onSubmit={onSubmit}>
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
          <InputTelefone {...telefone} />
        </div>
        <div className={style.formDiv}>
          <FormSelectLocal
            setCliente={() => ""}
            label={"Clínicas"}
            type={"local"}
            {...local}
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

export default FormClienteEdit;
