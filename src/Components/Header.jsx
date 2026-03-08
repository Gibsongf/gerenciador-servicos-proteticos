import React from "react";
import ToothIcon from "./svg/ToothIcon";
import UserIcon from "./svg/UserIcon";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={style.container}>
      <div className="icon-container">
        <ToothIcon />
        <p>Manejamento Protético</p>
      </div>
      <div className="icon-container">
        <UserIcon />
        <Link>Minha Conta</Link>
      </div>
    </div>
  );
};

export default Header;
