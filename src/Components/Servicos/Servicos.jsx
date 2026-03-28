import React from "react";
import style from "./Servicos.module.css";
import FilterService from "./Filter/FilterService";
import { ServicoStorage } from "./ServicoContext";
import ServicosContent from "./ServicosContent";
import useMedia from "../../Hooks/useMedia";
import { ServiceTitle, MobileTitle } from "./ServicoTitle";
import ExportService from "./Filter/ExportService";
import { Route, Routes } from "react-router-dom";
import FormServicoNovo from "./Form/FormServicoNovo";
import FormServicoEdit from "./Form/FormServicoEdit";
import ServicoMobile from "./ServicoContentMobile";

// create a other filter when is mobile
const Home = () => {
  const mobile = useMedia();
  return (
    <>
      {mobile ? <MobileTitle /> : <ServiceTitle />}
      <FilterService />
      <ExportService />
      {mobile ? <ServicoMobile /> : <ServicosContent />}
    </>
  );
};
const Servicos = () => {
  return (
    <ServicoStorage>
      <section className={style.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="novo" element={<FormServicoNovo />} />
          <Route path="editar/:id" element={<FormServicoEdit />} />
        </Routes>
      </section>
    </ServicoStorage>
  );
};

export default Servicos;
