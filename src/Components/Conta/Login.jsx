import React from "react";
import { Input, InputRememberMe } from "../Form/Input";
import useForm from "../../Hooks/useForm";
import style from "../../Styles/Login.module.css";
import ToothIcon from "../svg/ToothIcon";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { USER_LOGIN } from "../../Api";
import { UserContext } from "../../Context";

const Login = () => {
  const username = useForm("");
  const password = useForm("");
  const remember = useForm("");
  const nav = useNavigate();
  const { userLogin, login, loading, error } = React.useContext(UserContext);

  const submit = async (e) => {
    e.preventDefault();
    userLogin(username.value, password.value);
  };
  React.useEffect(() => {
    if (login === true) {
      nav("/conta");
    }
  }, [login, nav]);
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

        <form onSubmit={submit} className={style.form}>
          <Input
            label="Username"
            type="text"
            name="username"
            required={true}
            {...username}
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
          {error && <p className={style.error}>{error}</p>}

          {loading ? (
            <button className={style.entrar} disabled>
              Carregando...
            </button>
          ) : (
            <button className={style.entrar}>Entrar</button>
          )}
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
