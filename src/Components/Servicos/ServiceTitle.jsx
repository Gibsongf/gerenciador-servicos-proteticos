import React from "react";
import style from "./Servicos.module.css";

export const MobileTitle = () => {
  return (
    <div className={style.mobileTitle}>
      <ServiceTitle />
      <button className={style.buttonAdd}>Add Serviço</button>
    </div>
  );
};
export const ServiceTitle = () => {
  return <h1 className={style.pageTitle}>Serviços</h1>;
};
