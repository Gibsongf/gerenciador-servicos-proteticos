import React from "react";
import { ClinicaContext } from "../../Context";
import style from "../../Styles/ContentMobile.module.css";
import EditMenu from "../Table/EditMenu";
import useContentAction from "../../Hooks/useContentAction";
const Card = ({ item, i }) => {
  const { saveClickClinic, setUpdate } = React.useContext(ClinicaContext);
  const { onClickDelete, onClickEdit } = useContentAction(
    item,
    setUpdate,
    saveClickClinic,
    "local",
    "Clínica",
  );
  return (
    <>
      <div className={style.card}>
        <div className={style.content}>
          <span>
            Nome: <p>{item.nome}</p>
          </span>
          <span>
            Endereço: <p>{item.endereço}</p>
          </span>
          <span>
            Tabela: <p>{item.tabela}</p>
          </span>
        </div>
        <EditMenu
          onClickDelete={onClickDelete}
          saveInfo={onClickEdit}
          id={item._id}
          editPath={"/clinica/editar/"}
        />
      </div>
    </>
  );
};
const ClinicaMobile = () => {
  const { data, loading, filter } = React.useContext(ClinicaContext);

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

export default ClinicaMobile;
