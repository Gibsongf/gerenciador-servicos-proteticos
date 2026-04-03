import React from "react";
import ToothIcon from "./svg/ToothIcon";
import UserIcon from "./svg/UserIcon";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import useMedia from "../Hooks/useMedia";
import DropDownConfig from "./Conta/DropDown";

const Header = () => {
  return (
    <header className={style.container}>
      <Link to={"/servico"} className={style.logoContainer}>
        <ToothIcon />
        <p>Manejamento Protético</p>
      </Link>
      <div className={style.accountContainer}>
        <UserIcon />
        <DropDownConfig />
      </div>
    </header>
  );
};

export default Header;
