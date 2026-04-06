import React from "react";
import style from "../../Styles/Home.module.css";
import FilterService from "./FilterService";
import { ServicoStorage } from "./ServicoContext";
import ServicosContent from "./ServicosContent";
import useMedia from "../../Hooks/useMedia";
import { Title, MobileTitle } from "../Title/ContentTitle";
import ExportServiceBtn from "../ExportarExcel/ExportServiceBtn";
import { Route, Routes } from "react-router-dom";
import FormServicoNovo from "./Form/FormServicoNovo";
import FormServicoEdit from "./Form/FormServicoEdit";
import ServicoMobile from "./ServicoContentMobile";

// create a other filter when is mobile
const Home = () => {
  return (
    <>
      <section className={style.container}>
        <Title text={"Serviços"} />
        <FilterService />
        <ExportServiceBtn />
      </section>
      <ServicosContent />
    </>
  );
};
const HomeMobile = () => {
  return (
    <section className={style.container}>
      <MobileTitle path="/servico/novo" text={"+ Add Serviço"} />
      <FilterService />
      <ExportServiceBtn />
      <ServicoMobile />
    </section>
  );
};
const Servicos = () => {
  const mobile = useMedia();

  return (
    <ServicoStorage>
      <Routes>
        <Route path="/" element={mobile ? <HomeMobile /> : <Home />} />
        <Route path="novo" element={<FormServicoNovo />} />
        <Route path="editar/:id" element={<FormServicoEdit />} />
      </Routes>
    </ServicoStorage>
  );
};

export default Servicos;
