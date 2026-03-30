import React from "react";
import style from "./FormClinica.module.css";
import sectionStyle from "../../../Styles/Home.module.css";
import useForm from "../../../Hooks/useForm";
import { ClinicaContext } from "../../../Context";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { Input, InputTelefone } from "../../Form/Input";
import SelectTabela from "../../Form/SelectTabela";
import { USER_PUT } from "../../../Api";

const FormClinicaNovo = () => {
  const { setUpdate, storedClinic } = React.useContext(ClinicaContext);
  const { id } = useParams();
  const nome = useForm(true, "", storedClinic.nome);
  const endereço = useForm(true, "", storedClinic.endereço);
  const cep = useForm(true, "cep", storedClinic.cep);
  const telefone = useForm(false, "telefone", storedClinic.telefone);
  const tabela = useForm(false, "", storedClinic.tabela);
  const { request, loading } = useFetch();
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
      }
    });
    const { url, options } = USER_PUT("local", id, obj);
    const submit = async () => {
      const { response, json, serverError } = await request(url, options);
      if (response.ok) {
        setUpdate((update) => update + 1);
        alert(json.message);
        return true;
      } else if (serverError) {
        let msg = Object.keys(serverError).map(
          (k) => `${k}: ${serverError[k]}`,
        );
        alert(...msg);
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
      <h1></h1>
      <form onSubmit={onSubmit} action="">
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
            required={true}
            placeholder={"00000-000"}
            {...cep}
          />
          <InputTelefone {...telefone} />
        </div>
        <div className={style.formSelect}>
          <SelectTabela onChange={tabela.onChange} value={tabela.value} />
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
