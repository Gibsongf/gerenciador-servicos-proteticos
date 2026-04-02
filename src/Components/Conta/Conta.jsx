import React from "react";
import { Input, InputTelefone } from "../Form/Input";
import useForm from "../../Hooks/useForm";
import style from "../../Styles/Form.module.css";
import sectionStyle from "../../Styles/Home.module.css";
import FormInfoUser from "./FormUserInfo";
import PerfilHeader from "./PerfilHeader";
import FormResetPassword from "./FormResetPassword";
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

const Conta = () => {
  const user = {
    nome: "userName",
    user: "11 99999-9999",
    email: "user@mail.com",
    labName: "User lab",
    instagram: "@userInsta",
  };

  return (
    <div className={sectionStyle.container}>
      <PerfilHeader />
      <FormInfoUser />
      <FormResetPassword />
    </div>
  );
};

export default Conta;
