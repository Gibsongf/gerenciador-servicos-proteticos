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

const Home = () => {
  return (
    <>
      <section className={style.container}>
        <Title text={"Clínicas"} />
        <Filter />
      </section>
      <ClinicasContent />
    </>
  );
};
const HomeMobile = () => {
  return (
    <section className={style.container}>
      <MobileTitle
        path="/clinica/novo"
        title={"Clínicas"}
        text={"+ Add Clínica"}
      />
      <ClinicaMobile />
    </section>
  );
};
const Clinicas = () => {
  const mobile = useMedia();

  return (
    <ClinicaStorage>
      <Routes>
        <Route path="/" element={mobile ? <HomeMobile /> : <Home />} />
        <Route path="novo" element={<FormClinicaNovo />} />
        <Route path="editar/:id" element={<FormClinicaEdit />} />
      </Routes>
    </ClinicaStorage>
  );
};

export default Clinicas;
