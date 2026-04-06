import React from "react";
import { Input, InputTelefone } from "../Form/Input";
import useForm from "../../Hooks/useForm";
import style from "../../Styles/Form.module.css";
import sectionStyle from "../../Styles/Home.module.css";
import { UserFormHeader } from "./FormHeaders";
import { UserContext } from "../../Context";
import { USER_ACC_PUT } from "../../Api";
import useFetch from "../../Hooks/useFetch";

const FormInfoUser = () => {
  // const userData = {
  //   fullName: "João Silva",
  //   email: "joao.silva@email.com",
  //   labName: "Laboratório Vida",
  //   crotpd: 123456,
  //   instagram: "@joaosilva",
  //   telefone: "11 91234-5678",
  //   username: "test",
  // };

  const { userData } = React.useContext(UserContext);
  const { request, error } = useFetch();
  const nome = useForm(true, "", userData.fullName);
  const telefone = useForm(false, "telefone", userData.telefone);
  const username = useForm(true, "", userData.username);
  const email = useForm(true, "", userData.email);
  const labName = useForm(false, "", userData.labName);
  const instagram = useForm(false, "", userData.instagram);
  const crotpd = useForm(false, "", userData.crotpd);
  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      fullName: nome.value,
      username: username.value,
      telefone: telefone.value.replace(/\D/g, ""),
      email: email.value,
      labName: labName.value,
      instagram: instagram.value,
      crotpd: crotpd.value,
    };
    const { url, options } = USER_ACC_PUT(obj, userData._id);
    const submit = async () => {
      const { response, json, fetchError } = await request(url, options);
      if (response.ok) {
        localStorage.setItem("userData", JSON.stringify(obj));

        alert(json.message);
        return true;
      } else if (fetchError) {
        alert(fetchError);
      } else {
        alert(error);
      }

      return false;
    };
    submit();
  };
  return (
    <div className={sectionStyle.container}>
      <form onSubmit={onSubmit} className={`${style.form} ${style.userForm}`}>
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
            label="Username"
            type="text"
            name="username"
            required={true}
            {...username}
          />
        </div>
        <div className={style.formSelect}>
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
