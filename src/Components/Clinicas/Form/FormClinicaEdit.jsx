import React from "react";
import style from "../../../Styles/Form.module.css";
import sectionStyle from "../../../Styles/Home.module.css";
import useForm from "../../../Hooks/useForm";
import { ClinicaContext } from "../../../Context";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { Input, InputTelefone } from "../../Form/Input";
import SelectTabela from "../../Form/SelectTabela";
import { USER_PUT } from "../../../Api";

const FormClinicaEdit = () => {
  const { setUpdate, storedClinic } = React.useContext(ClinicaContext);
  const { id } = useParams();
  const nome = useForm(true, "", storedClinic.nome);
  const endereço = useForm(true, "", storedClinic.endereço);
  const cep = useForm(true, "cep", storedClinic.cep);
  const telefone = useForm(false, "telefone", storedClinic.telefone);
  const tabela = useForm(false, "", storedClinic.tabela);
  const { request, loading, error } = useFetch();
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
        nav("/clinica");
      }
    });
  };
  const onCancel = (e) => {
    e.preventDefault();
    nav("/clinica");
  };
  return (
    <section className={sectionStyle.container}>
      <h1>Edição de Clínica</h1>
      <form className={style.form} onSubmit={onSubmit} action="">
        <div className={style.formDiv}>
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
        <div className={style.formDiv}>
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
        <div className={style.formDiv}>
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

export default FormClinicaEdit;
