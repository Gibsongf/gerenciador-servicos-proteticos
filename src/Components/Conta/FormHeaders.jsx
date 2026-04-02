import React from "react";
import UserIcon from "../svg/UserIcon";
import style from "./FormHeader.module.css";
import LockIcon from "../svg/LockIcon";
const FormHeader = ({ icon, title, subTitle }) => {
  return (
    <div className={`${style.container} `}>
      {icon}
      <h1 className={style.title}>{title}</h1>

      <p className={style.subTitle}>{subTitle}</p>
    </div>
  );
};

export const PasswordFormHeader = () => {
  const title = "Segurança";
  const subTitle = "Altere a sua senha de acesso ao sistema";
  return (
    <FormHeader
      title={title}
      subTitle={subTitle}
      icon={<LockIcon color={"#0F766E"} />}
    />
  );
};
export const UserFormHeader = () => {
  const title = "Informações pessoais";

  return <FormHeader title={title} icon={<UserIcon color={"#0F766E"} />} />;
};
