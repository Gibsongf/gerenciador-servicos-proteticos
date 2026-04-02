import React from "react";
import UserIcon from "../svg/UserIcon";
import style from "./PerfilHeader.module.css";
import useMedia from "../../Hooks/useMedia";
const PerfilHeader = () => {
  const mobile = useMedia();
  return (
    <div className={style.container}>
      <UserIcon color={"#0F766E"} />
      <h1 className={style.title}>Perfil</h1>

      {!mobile && (
        <p className={style.subTitle}>
          Gerencie suas informações pessoais de acesso
        </p>
      )}
    </div>
  );
};

export default PerfilHeader;
