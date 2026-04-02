import React from "react";
import { Input, InputTelefone } from "../Form/Input";
import useForm from "../../Hooks/useForm";
import style from "../../Styles/Form.module.css";
import sectionStyle from "../../Styles/Home.module.css";
import PerfilHeader from "./PerfilHeader";
import { UserFormHeader } from "./FormHeaders";
//                 "Lab name",
//                 "",
//                 "CROTPD 00000",
//                 "",
//                 "Tec. Resp.: userName",
//                 "",
//                 "Tel: (11) 99999-9999 (whatsapp)",
//                 "Instagram: @social",
//                 "",
//                 "Informações do Pedido",

const FormInfoUser = () => {
  const user = {
    nome: "userName",
    user: "11 99999-9999",
    email: "user@mail.com",
    labName: "User lab",
    instagram: "@userInsta",
  };
  const nome = useForm(true, "", user.nome);
  const telefone = useForm(false, "telefone", user.telefone);
  const email = useForm(true, "", user.email);
  const labName = useForm(false, "", user.labName);
  const instagram = useForm(false, "", user.instagram);
  const crotpd = useForm(false, "", user.crotpd);
  return (
    <div className={sectionStyle.container}>
      <form className={`${style.form} ${style.userForm}`}>
        <UserFormHeader />
        <div className={style.formSelect}>
          <Input
            label="Nome Completo *"
            type="text"
            name="nome"
            required={true}
            {...nome}
          />
          <Input
            label="E-mail *"
            type="mail"
            name="email"
            required={true}
            {...email}
          />
        </div>
        <div className={style.formSelect}>
          <InputTelefone
            type="tel"
            name="telefone"
            required={true}
            {...telefone}
          />
          <Input
            label="CROTPD (opcional)"
            type="text"
            name="crotpd"
            required={true}
            {...crotpd}
          />
        </div>
        <div className={style.formSelect}>
          <Input
            label="Nome do Laboratório (opcional)"
            type="text"
            name="labName"
            required={false}
            {...labName}
          />
          <Input
            label="Instagram (opcional)"
            type="text"
            name="instagram"
            required={false}
            {...instagram}
          />
        </div>
        <div className={style.btnContainer}>
          <button className={`${style.btnSalvar} ${style.btnSalvarConta}`}>
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormInfoUser;
