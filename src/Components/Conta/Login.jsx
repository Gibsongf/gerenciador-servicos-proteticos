import React from "react";
import { Input, InputRememberMe } from "../Form/Input";
import useForm from "../../Hooks/useForm";
import style from "../../Styles/Login.module.css";
import ToothIcon from "../svg/ToothIcon";
import { Link } from "react-router-dom";

const Login = () => {
  const email = useForm("");
  const password = useForm("");
  const remember = useForm("");
  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <ToothIcon />
        <p>Sistema Protético</p>
      </div>
      <div className={style.formContainer}>
        <div className={style.welcome}>
          <h2>Bem-vindo de volta</h2>
          <p>Digite seus dados para entrar</p>
        </div>

        <form className={style.form} action="">
          <Input
            label="Email"
            type="mail"
            name="email"
            required={true}
            {...email}
          />
          <Input
            label="Senha"
            type="password"
            name="password"
            required={true}
            {...password}
          />
          <div className={style.reset}>
            <InputRememberMe {...remember} />
            <Link to={"/esqueceu"}>Esqueceu a senha?</Link>
          </div>
          <button className={style.entrar}>Entrar</button>
        </form>
        <div className={style.footer}>
          <p>
            Não tem conta? <Link>Entre como visitante</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
