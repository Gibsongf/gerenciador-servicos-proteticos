import React from "react";
import { ProdutoStorage } from "./ProdutoContext";
import style from "../../Styles/Home.module.css";
import useMedia from "../../Hooks/useMedia";
import { Route, Routes } from "react-router-dom";
import ProdutosContent from "./ProdutoContent";
import { Title, MobileTitle } from "../Title/ContentTitle";
import FormProdutoNovo from "./Form/FormProdutoNovo";
import FormProdutoEdit from "./Form/FormProdutoEdit";
import ProdutoMobile from "./ProdutoContentMobile";
import FilterProduto from "./FilterProdutos";

const Home = () => {
  return (
    <>
      <section className={style.container}>
        <Title text={"Produtos"} />
        <FilterProduto />
      </section>
      <ProdutosContent />
    </>
  );
};
const HomeMobile = () => {
  return (
    <section className={style.container}>
      <MobileTitle
        path="/produto/novo"
        title={"Produtos"}
        text={"+ Add Produto"}
      />
      <ProdutoMobile />
    </section>
  );
};
const Produtos = () => {
  const mobile = useMedia();

  return (
    <ProdutoStorage>
      <Routes>
        <Route path="/" element={mobile ? <HomeMobile /> : <Home />} />
        <Route path="novo" element={<FormProdutoNovo />} />
        <Route path="editar/:id" element={<FormProdutoEdit />} />
      </Routes>
    </ProdutoStorage>
  );
};

export default Produtos;
