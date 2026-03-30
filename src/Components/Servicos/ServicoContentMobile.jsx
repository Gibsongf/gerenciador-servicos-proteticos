import React from "react";
import { ServicoContext } from "../../Context";
import style from "../../Styles/ContentMobile.module.css";
import EditMenu from "../Table/EditMenu";
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
          <span>
            Data: <p>{item.dataRegistro.split("T")[0]}</p>
          </span>
          <span>
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
  const [page, setPage] = React.useState(2);
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
        {data && data.all.map((item, i) => filterData(item, i))}
      </div>
      {data && (
        <button className={style.btnLoadMore} onClick={onClickLoad} disabled>
          Sem mais resultados
        </button>
      )}
    </>
  );
};

export default ServicoMobile;
