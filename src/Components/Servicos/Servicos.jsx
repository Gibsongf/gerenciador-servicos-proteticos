import React from "react";
import style from "./Servicos.module.css";
import FilterService from "./FilterService";
import { ServiceStorage } from "./ServiceContext";
import ServicosContent from "./ServicosContent";

const Servicos = () => {
  return (
    <ServiceStorage>
      <section className={style.container}>
        <h1>Serviços</h1>

        <FilterService />
        <ServicosContent />
      </section>
    </ServiceStorage>
  );
};

export default Servicos;
