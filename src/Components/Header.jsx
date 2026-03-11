import React from "react";
import ToothIcon from "./svg/ToothIcon";
import UserIcon from "./svg/UserIcon";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import useMedia from "../Hooks/useMedia";

const Header = () => {
  const mobile = useMedia("(max-width: 700px)");

  return (
    <header className={style.container}>
      <div className={style.logoContainer}>
        <ToothIcon />
        <p>Manejamento Protético</p>
      </div>
      <div className={style.accountContainer}>
        <UserIcon />
        {!mobile ? <Link className={style.link}>Minha Conta</Link> : ""}
      </div>
    </header>
  );
};

export default Header;
