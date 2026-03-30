import React from "react";
import { ClinicaStorage } from "./ClinicaContext";
import style from "../../Styles/Home.module.css";
import useMedia from "../../Hooks/useMedia";
import { Route, Routes } from "react-router-dom";
import ClinicasContent from "./ClinicaContent";
import { Title, MobileTitle } from "../Title/ContentTitle";
import Filter from "./ButtonAdd";
import FormClinicaNovo from "./Form/FormClinicaNovo";
import FormClinicaEdit from "./Form/FormClinicaEdit";
import ClinicaMobile from "./ClinicaContentMobile";
// create a other filter when is mobile

const Home = () => {
  return (
    <>
      <section className={style.container}>
        <Title text={"Clínicas"} />
        <Filter />
        {/* <ServiceTitle /> */}
        {/* <FilterService /> */}
        {/* <ExportService /> */}
      </section>
      <ClinicasContent />
    </>
  );
};
const HomeMobile = () => {
  return (
    <section className={style.container}>
      <MobileTitle path="/clinica/novo" text={"+ Add Clínica"} />
      {/* <FilterService /> */}
      {/* <ExportService /> */}
      {/* <ServicoMobile /> */}
      <ClinicaMobile />
    </section>
  );
};
const Clinicas = () => {
  const mobile = useMedia();

  return (
    <ClinicaStorage>
      {/* <section className={style.container}> */}
      <Routes>
        <Route path="/" element={mobile ? <HomeMobile /> : <Home />} />
        <Route path="novo" element={<FormClinicaNovo />} />
        <Route path="editar/:id" element={<FormClinicaEdit />} />
      </Routes>
      {/* </section> */}
    </ClinicaStorage>
  );
};

export default Clinicas;
