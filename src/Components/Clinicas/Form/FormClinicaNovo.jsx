import React from "react";
import style from "./FormClinica.module.css";
import sectionStyle from "../../../Styles/Home.module.css";
import useForm from "../../../Hooks/useForm";
import { ClinicaContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { Input, InputTelefone } from "../../Form/Input";
import SelectTabela from "../../Form/SelectTabela";
import { USER_POST } from "../../../Api";

const FormClinicaNovo = () => {
  const { setUpdate } = React.useContext(ClinicaContext);
  const nome = useForm(true);
  const endereço = useForm(true);
  const cep = useForm(false);
  const telefone = useForm(false, "telefone");
  const tabela = useForm();
  const { request, error, loading } = useFetch();
  const nav = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      nome: nome.value,
      endereço: endereço.value,
      cep: cep.value,
      telefone: telefone.value,
      tabela: tabela.value,
    };
    Object.keys(obj).forEach((k) => {
      if (!obj[k]) {
        delete obj[k];
      } else if (k === "telefone") {
        obj.telefone = telefone.value.replace(/\D/g, "");
      }
    });
    const { url, options } = USER_POST("local", obj);
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
      // nav("/clinica");
    }
  };
  const onCancel = (e) => {
    e.preventDefault();
    nav("/clinica");
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
          <Input
            label="Endereço *"
            type="text"
            name="endereço"
            required={true}
            {...endereço}
          />
        </div>
        <div className={style.formSelect}>
          <Input
            label="CEP"
            type="code"
            name="cep"
            required={false}
            placeholder={"00000-000"}
            {...cep}
          />
          <InputTelefone {...telefone} />
        </div>
        <div className={style.formSelect}>
          <SelectTabela onChange={tabela.onChange} />
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
