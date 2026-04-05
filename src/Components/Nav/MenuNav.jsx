import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuNav.css";
import ToothIcon from "../svg/ToothIcon";
import ClientIcon from "../svg/ClientIcon";
import ClinicIcon from "../svg/ClinicIcon";
import ServiceIcon from "../svg/ServiceIcon";
import { UserContext } from "../../Context";

const MenuNav = () => {
  return (
    <nav className="container">
      <ul className="list-container">
        <li>
          <NavLink className="link" to="/servico">
            <ServiceIcon color=" #1F2937" />
            <p>Serviços</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/cliente">
            <ClientIcon color=" #1F2937" />
            <p>Clientes</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/clinica">
            <ClinicIcon color=" #1F2937" />
            <p>Clínicas</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/produto">
            <ToothIcon color="#1F2937" />
            <p>Produtos</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default MenuNav;
