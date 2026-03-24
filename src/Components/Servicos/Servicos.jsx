import React from "react";
import style from "./Servicos.module.css";
import FilterService from "./Filter/FilterService";
import { ServiceStorage } from "./ServiceContext";
import ServicosContent from "./ServicosContent";
import useMedia from "../../Hooks/useMedia";
import { ServiceTitle, MobileTitle } from "./ServiceTitle";
import ExportService from "./Filter/ExportService";
import FormService from "../Form/FormService";
import { Route, Routes } from "react-router-dom";
import ServiceNew from "./Form/ServiceNew";

// create a other filter when is mobile
const Home = () => {
  const mobile = useMedia();
  return (
    <>
      {mobile ? <MobileTitle /> : <ServiceTitle />}
      <FilterService />
      <ExportService />
      <ServicosContent />
    </>
  );
};
const Servicos = () => {
  return (
    <ServiceStorage>
      <section className={style.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="novo" element={<ServiceNew />} />
        </Routes>
      </section>
      {/* <FormService /> */}
    </ServiceStorage>
  );
};

export default Servicos;
