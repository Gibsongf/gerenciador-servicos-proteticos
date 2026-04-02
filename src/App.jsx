import React from "react";
import { Route, Routes } from "react-router-dom";
import MenuNav from "./Components/Nav/MenuNav";
import Servicos from "./Components/Servicos/Servicos";
import Clientes from "./Components/Clientes/Clientes";
import Clinicas from "./Components/Clinicas/Clinicas";
import Produtos from "./Components/Produtos/Produtos";
import Header from "./Components/Header";
import "./App.css";
import Conta from "./Components/Conta/Conta";
import ExportarExcel from "./Components/ExportarExcel/ExportarExcel";
function App() {
  return (
    <>
      <Header />

      <main className="App">
        <MenuNav />
        <Routes>
          <Route path="*" element={<Servicos />} />
          <Route path="servico/*" element={<Servicos />} />
          <Route path="cliente/*" element={<Clientes />} />
          <Route path="clinica/*" element={<Clinicas />} />
          <Route path="produto/*" element={<Produtos />} />
          <Route path="conta/*" element={<Conta />} />
          <Route path="exportar/*" element={<ExportarExcel />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
