import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import ToothIcon from "./svg/ToothIcon";
import ClientIcon from "./svg/ClientIcon";
import ClinicIcon from "./svg/ClinicIcon";
import ServiceIcon from "./svg/ServiceIcon";

const Links = ({ text, path }) => {
  const [iconColor, setIconColor] = React.useState("#1F2937");
  const activeStyle = ({ isActive }) => {
    if (isActive) {
      setIconColor("#fff");
      return {
        color: "#FFF",
        backgroundColor: "#0D9488",
      };
    } else {
      setIconColor("#1F2937");
    }
  };
  const Icon = {
    "/servicos": <ServiceIcon color={iconColor} />,
    "/clientes": <ClientIcon color={iconColor} />,
    "/clinicas": <ClinicIcon color={iconColor} />,
    "/produtos": <ToothIcon color={iconColor} />,
  };
  return (
    <li>
      <NavLink style={activeStyle} className={style.link} to={path}>
        {Icon[path]}
        <p>{text}</p>
      </NavLink>
    </li>
  );
};
const Nav = () => {
  return (
    <nav className={style.container}>
      <ul>
        <Links text="Serviços" path="/servicos" />
        <Links text="Clientes" path="/clientes" />
        <Links text="Clinicas" path="/clinicas" />
        <Links text="Produtos" path="/produtos" />
      </ul>
    </nav>
  );
};
export default Nav;
