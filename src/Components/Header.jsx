import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
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
