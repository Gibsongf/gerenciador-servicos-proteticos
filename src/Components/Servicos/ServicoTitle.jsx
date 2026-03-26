import React from "react";
import style from "./Servicos.module.css";
import { Link } from "react-router-dom";
import btnStyle from "../Button/Button.module.css";

// select date , sel
export const MobileTitle = () => {
  return (
    <div className={style.mobileTitle}>
      <ServiceTitle />
      <Link className={btnStyle.buttonAdd} to={"/servico/novo"}>
        Add Serviço
      </Link>
    </div>
  );
};
export const ServiceTitle = () => {
  return <h1 className={style.pageTitle}>Serviços</h1>;
};
