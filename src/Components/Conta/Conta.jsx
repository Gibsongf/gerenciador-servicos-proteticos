import React from "react";
import { Input, InputTelefone } from "../Form/Input";
import sectionStyle from "../../Styles/Home.module.css";
import FormInfoUser from "./FormUserInfo";
import PerfilHeader from "./PerfilHeader";
import FormResetPassword from "./FormResetPassword";

const Conta = () => {
  return (
    <div className={sectionStyle.container}>
      <PerfilHeader />
      <FormInfoUser />
      <FormResetPassword />
    </div>
  );
};

export default Conta;
