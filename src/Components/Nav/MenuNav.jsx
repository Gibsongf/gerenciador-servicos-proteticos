import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuNav.css";
import ToothIcon from "../svg/ToothIcon";
import ClientIcon from "../svg/ClientIcon";
import ClinicIcon from "../svg/ClinicIcon";
import ServiceIcon from "../svg/ServiceIcon";

const MenuNav = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <NavLink className="link" to="/">
            <ServiceIcon color=" #1F2937" />
            <p>Serviços</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/clientes">
            <ClientIcon color=" #1F2937" />
            <p>Clientes</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/clinicas">
            <ClinicIcon color=" #1F2937" />
            <p>Clínicas</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/produtos">
            <ToothIcon color="#1F2937" />
            <p>Produtos</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default MenuNav;
