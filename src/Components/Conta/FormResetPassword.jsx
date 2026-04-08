import React from "react";
import { Input } from "../Form/Input";
import useForm from "../../Hooks/useForm";
import style from "../../Styles/Form.module.css";
import sectionStyle from "../../Styles/Home.module.css";
import { PasswordFormHeader } from "./FormHeaders";

const FormResetPassword = () => {
  const user = {
    current: "userName",
    user: "11 99999-9999",
    email: "user@mail.com",
    labName: "User lab",
    instagram: "@userInsta",
  };
  const current = useForm("");
  const newPassword = useForm("");
  const confirmPassword = useForm("");

  return (
    <div className={sectionStyle.container}>
      <form className={style.form}>
        <PasswordFormHeader />

        <div className={style.formDiv}>
          <Input
            label="Senha atual"
            type="password"
            name="current"
            required={true}
            {...current}
          />
        </div>
        <div className={style.formDiv}>
          <Input
            label="Nova senha"
            type="password"
            name="newPassword"
            required={true}
            {...newPassword}
          />
          <Input
            label="Confirmar nova senha"
            type="password"
            name="confirmPassword"
            required={true}
            {...confirmPassword}
          />
        </div>

        <div className={style.btnContainer}>
          <button className={`${style.btnSalvar} ${style.btnSenha}`}>
            Atualizar Senha
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormResetPassword;
