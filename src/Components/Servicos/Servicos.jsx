import React from "react";
import style from "./Servicos.module.css";
import FilterService from "./FilterService";
import { ServiceStorage } from "./ServiceContext";
import ServicosContent from "./ServicosContent";
import useMedia from "../../Hooks/useMedia";
import { ServiceTitle, MobileTitle } from "./ServiceTitle";

// create a other filter when is mobile
const Servicos = () => {
  const mobile = useMedia();
  return (
    <ServiceStorage>
      <section className={style.container}>
        {mobile ? <MobileTitle /> : <ServiceTitle />}

        <FilterService />
        <ServicosContent />
      </section>
    </ServiceStorage>
  );
};

export default Servicos;
