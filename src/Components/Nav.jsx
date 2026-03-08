import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
const Nav = () => {
  return (
    <nav className={style.container}>
      <ul>
        <li>
          <NavLink to="servicos"> Serviços</NavLink>
        </li>
        <li>
          <NavLink to="clientes"> Clientes</NavLink>
        </li>
        <li>
          <NavLink to="clinicas"> Clínicas</NavLink>
        </li>
        <li>
          <NavLink to="produtos"> Produtos</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
