import React from "react";
import { ProdutoContext } from "../../Context";
import style from "../../Styles/ContentMobile.module.css";
import EditMenu from "../Table/EditMenu";
import useContentAction from "../../Hooks/useContentAction";
import Loading from "../svg/Loading";
const Card = ({ item, i }) => {
  const { saveInfo, setUpdate } = React.useContext(ProdutoContext);
  const { onClickDelete, onClickEdit } = useContentAction(
    item,
    setUpdate,
    saveInfo,
    "produto",
    "Produto",
  );
  return (
    <>
      <div className={style.card}>
        <div className={style.content}>
          <span>
            Nome: <p>{item.nome}</p>
          </span>
          <span>
            Valor Normal: <p>R$: {item.valor_normal}</p>
          </span>
          <span>
            Valor Reduzido: <p>R$: {item.valor_reduzido}</p>
          </span>
          {/* <span>
            Serviços: <p>{item.serviços.length}</p>
          </span> */}
        </div>
        <EditMenu
          onClickDelete={onClickDelete}
          saveInfo={onClickEdit}
          id={item._id}
          editPath={"/produto/editar/"}
        />
      </div>
    </>
  );
};
const ProdutoMobile = () => {
  const { data, loading, filter } = React.useContext(ProdutoContext);

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

  if (loading) return <Loading />;

  return (
    <div className={style.cardContainer}>
      {data && data.all.map((item, i) => filterData(item, i))}
    </div>
  );
};

export default ProdutoMobile;
