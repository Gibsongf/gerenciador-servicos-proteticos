import React from "react";
import { ServicoContext } from "../../Context";
import style from "./ServicosContentMobile.module.css";
import EditMenu from "../Table/EditMenu";
import useFetch from "../../Hooks/useFetch";
import { USER_DELETE } from "../../Api";
import useContentAction from "../../Hooks/useContentAction";
const Card = ({ item, i }) => {
  const { saveService, setUpdate } = React.useContext(ServicoContext);
  const { onClickDelete, onClickEdit } = useContentAction(
    item,
    setUpdate,
    saveService,
    "servico",
    "Serviço",
  );

  return (
    <>
      <div className={style.card}>
        <div className={style.content}>
          <span className={style.col1}>
            Data: <p>{item.dataRegistro.split("T")[0]}</p>
          </span>
          <span className={style.col2}>
            Cliente: <p>{item.cliente.nome}</p>
          </span>
          <span>
            Clínica: <p>{item.local.nome}</p>
          </span>
          <span>
            Paciente: <p>{item.paciente}</p>
          </span>
          <span className={style.produtos}>
            Produtos
            {item.produtos.map((p, indx) => (
              <p key={i + indx}>
                {p.produto.nome} (x{p.quantidade})
              </p>
            ))}
          </span>
        </div>
        <EditMenu
          onClickDelete={onClickDelete}
          saveInfo={onClickEdit}
          id={item._id}
          editPath={"/servico/editar/"}
        />
      </div>
    </>
  );
};
const ServicoMobile = () => {
  const { data, loading, filter } = React.useContext(ServicoContext);
  const [page, setPage] = React.useState(5);
  const filterData = (item, i) => {
    if (Object.values(filter).length) {
      let match = false;
      for (const [key, val] of Object.entries(filter)) {
        if (item[key].nome === val) {
          match = true;
        }
      }
      if (match) {
        return <Card key={i} item={item} i={i} />;
      }
      return "";
    }
    return <Card key={i} item={item} i={i} />;
  };
  if (loading) return <div>Loading</div>;
  const onClickLoad = () => {
    setPage((p) => p + 5);
  };
  return (
    <>
      <div className={style.cardContainer}>
        {data && data.all.slice(0, page).map((item, i) => filterData(item, i))}
      </div>
      {data && (
        <button
          className={style.btnLoadMore}
          onClick={onClickLoad}
          disabled={page > data.all.length - 1}>
          {page < data.all.length - 1 ? "Carregar Mais" : "Sem mais resultados"}
        </button>
      )}
    </>
  );
};

export default ServicoMobile;
