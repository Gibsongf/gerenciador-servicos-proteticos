import React from "react";
import { ClinicaStorage } from "./ClinicaContext";
import style from "./Clinicas.module.css";
import useMedia from "../../Hooks/useMedia";
import { Route, Routes } from "react-router-dom";
import ClinicasContent from "./ClinicaContent";
import { Title, MobileTitle } from "../Title/ContentTitle";
import Filter from "./ButtonAdd";
import FormClinicaNovo from "./Form/FormClinicaNovo";
import FormClinicaEdit from "./Form/FormClinicaEdit";
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
    <>
      <section className={style.container}>
        <MobileTitle path="/clinica/novo" text={"+ Add Clínica"} />
        {/* <FilterService /> */}
        {/* <ExportService /> */}
        {/* <ServicoMobile /> */}
      </section>
    </>
  );
};
const Clinicas = () => {
  const mobile = useMedia();

  return (
    <ClinicaStorage>
      {/* <section className={style.container}> */}
      <Routes>
        <Route path="/" element={mobile ? <HomeMobile /> : <Home />} />
        <Route
          path="novo"
          element={
            <section className={style.container}>
              <FormClinicaNovo />
            </section>
          }
        />
        <Route
          path="editar/:id"
          element={
            <section className={style.container}>
              <FormClinicaEdit />
            </section>
          }
        />
      </Routes>
      {/* </section> */}
    </ClinicaStorage>
  );
};

export default Clinicas;
