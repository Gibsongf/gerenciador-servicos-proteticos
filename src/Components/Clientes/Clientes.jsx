import React from "react";
import { ClienteStorage } from "./ClienteContext";
import style from "../../Styles/Home.module.css";
import useMedia from "../../Hooks/useMedia";
import { Route, Routes } from "react-router-dom";
import ClientesContent from "./ClienteContent";
import { Title, MobileTitle } from "../Title/ContentTitle";
import FormClienteNovo from "./Form/FormClienteNovo";
import FormClienteEdit from "./Form/FormClienteEdit";
import ClienteMobile from "./ClienteContentMobile";
import FilterCliente from "./FilterClientes";

const Home = () => {
  return (
    <>
      <section className={style.container}>
        <Title text={"Clientes"} />
        <FilterCliente />
      </section>
      <ClientesContent />
    </>
  );
};
const HomeMobile = () => {
  return (
    <section className={style.container}>
      <MobileTitle path="/cliente/novo" text={"+ Add Cliente"} />
      <ClienteMobile />
    </section>
  );
};
const Clientes = () => {
  const mobile = useMedia();

  return (
    <ClienteStorage>
      <Routes>
        <Route path="/" element={mobile ? <HomeMobile /> : <Home />} />
        <Route path="novo" element={<FormClienteNovo />} />
        <Route path="editar/:id" element={<FormClienteEdit />} />
      </Routes>
    </ClienteStorage>
  );
};

export default Clientes;
