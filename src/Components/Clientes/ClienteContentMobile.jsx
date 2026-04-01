import React from "react";
import { ClienteContext } from "../../Context";
import style from "../../Styles/ContentMobile.module.css";
import EditMenu from "../Table/EditMenu";
import useContentAction from "../../Hooks/useContentAction";
const Card = ({ item, i }) => {
  const { saveInfo, setUpdate } = React.useContext(ClienteContext);
  const { onClickDelete, onClickEdit } = useContentAction(
    item,
    setUpdate,
    saveInfo,
    "cliente",
    "Cliente",
  );
  return (
    <>
      <div className={style.card}>
        <div className={style.content}>
          <span>
            Nome: <p>{item.nome}</p>
          </span>
          <span>
            Clinica: <p>{item.local.nome}</p>
          </span>
           <span>
            endereço: <p>{item.local.endereço}</p>
          </span>
          <span>
            Serviços: <p>{item.serviços.length}</p>
          </span>
        </div>
        <EditMenu
          onClickDelete={onClickDelete}
          saveInfo={onClickEdit}
          id={item._id}
          editPath={"/cliente/editar/"}
        />
      </div>
    </>
  );
};
const ClienteMobile = () => {
  const { data, loading, filter } = React.useContext(ClienteContext);

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

  return (
    <div className={style.cardContainer}>
      {data && data.all.map((item, i) => filterData(item, i))}
    </div>
  );
};

export default ClienteMobile;
