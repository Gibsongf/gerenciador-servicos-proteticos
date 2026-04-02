import React from "react";
import ToothIcon from "./svg/ToothIcon";
import UserIcon from "./svg/UserIcon";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import useMedia from "../Hooks/useMedia";
import DropDownConfig from "./Conta/DropDown";

const Header = () => {
  const mobile = useMedia();

  return (
    <header className={style.container}>
      <div className={style.logoContainer}>
        <ToothIcon />
        <p>Manejamento Protético</p>
      </div>
      <div className={style.accountContainer}>
        <UserIcon />
        {!mobile ? <DropDownConfig /> : ""}
      </div>
    </header>
  );
};

export default Header;
