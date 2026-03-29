// nome: { type: String },
//   endereço: { type: String, required: true },
//   cep: { type: String, maxLength: 9 },
//   telefone: { type: String, maxLength: 14 },
//   tabela: {
//     type: String,
//     enum: ["Normal", "Reduzido"],
//     default: "Normal",
//   },

import React from "react";
import style from "./FormClinica.module.css";
import sectionStyle from "../../../Styles/Home.module.css";
import useForm from "../../../Hooks/useForm";
import { ClinicaContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { Input, InputTelefone } from "../../Form/Input";

const FormClinicaEdit = () => {
  const { setUpdate } = React.useContext(ClinicaContext);
  const nome = useForm(true);
  const endereço = useForm(true);
  const cep = useForm(false);
  const telefone = useForm(false, "telefone");
  const tabela = useForm();
  const { request, error, loading } = useFetch();
  const nav = useNavigate();

  return (
    <section className={sectionStyle.container}>
      <h1></h1>
      <form action="">
        <div className={style.formSelect}>
          <Input
            label="Nome"
            type="text"
            name="nome"
            required={true}
            {...nome}
          />
          <Input
            label="endereço"
            type="date"
            name="endereço"
            required={false}
            {...endereço}
          />
        </div>
        <div className={style.formSelect}>
          <Input label="cep" type="text" name="cep" required={false} {...cep} />
          <InputTelefone required={false} {...telefone} />
        </div>
        <div className={style.formSelect}>
          <select onChange={tabela.onChange} name="tabela" id="tabela">
            <option value="normal">Normal</option>
            <option value="reduzida">Reduzida</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default FormClinicaEdit;
