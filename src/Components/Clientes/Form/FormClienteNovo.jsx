import React from "react";
import style from "../../../Styles/Form.module.css";
import sectionStyle from "../../../Styles/Home.module.css";
import useForm from "../../../Hooks/useForm";
import { ClienteContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { Input, InputTelefone } from "../../Form/Input";
import { USER_POST } from "../../../Api";
import { FormSelectLocal } from "../../Form/SelectForm";

const FormClinicaNovo = () => {
  const { setUpdate } = React.useContext(ClienteContext);
  const nome = useForm(true);
  const local = useForm(true);
  const telefone = useForm(false, "telefone");
  const { request, error, loading } = useFetch();
  const nav = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      nome: nome.value,
      telefone: telefone.value,
      local: local.value,
    };
    Object.keys(obj).forEach((k) => {
      if (!obj[k]) {
        delete obj[k];
      } else if (k === "telefone") {
        obj.telefone = telefone.value.replace(/\D/g, "");
      }
    });
    const { url, options } = USER_POST("cliente", obj);
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
        nav("/cliente");
      }
    });
  };
  const onCancel = (e) => {
    e.preventDefault();
    nav("/cliente");
  };
  return (
    <section className={sectionStyle.container}>
      <h1>Adicionar Cliente</h1>
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

export default FormClinicaNovo;
