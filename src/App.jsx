import React from "react";
import { Route, Routes } from "react-router-dom";
import MenuNav from "./Components/Nav/MenuNav";
import Footer from "./Components/Footer";
import Servicos from "./Components/Servicos/Servicos";
import Clientes from "./Components/Clientes/Clientes";
import Clinicas from "./Components/Clinicas/Clinicas";
import Produtos from "./Components/Produtos/Produtos";
import Header from "./Components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <MenuNav />
        <Routes>
          <Route path="/" element={<Servicos />} />
          {/* <Route path="servicos" element={<Servicos />} /> */}
          <Route path="clientes" element={<Clientes />} />
          <Route path="clinicas" element={<Clinicas />} />
          <Route path="produtos" element={<Produtos />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
