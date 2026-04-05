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
import Login from "./Components/Conta/Login";
import UserData from "./UserContext";
// import { UserContext } from "./Context";
const AppRoute = () => {
  // const { login } = React.useContext(UserContext);
  return (
    <>
      <Header />

      <main className="App">
        <MenuNav />
        <Routes>
          <Route path="/login" element={<Login />} />
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
};

function App() {
  return (
    <UserData>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/*"
          element={
            <>
              <Header />
              <main className="App">
                <MenuNav />
                <Routes>
                  <Route path="servico/*" element={<Servicos />} />
                  <Route path="cliente/*" element={<Clientes />} />
                  <Route path="clinica/*" element={<Clinicas />} />
                  <Route path="produto/*" element={<Produtos />} />
                  <Route path="conta/*" element={<Conta />} />
                  <Route path="exportar/*" element={<ExportarExcel />} />
                </Routes>
              </main>
            </>
          }
        />
      </Routes>
    </UserData>
  );
}

export default App;
