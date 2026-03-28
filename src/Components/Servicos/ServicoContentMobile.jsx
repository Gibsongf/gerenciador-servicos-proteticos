import React from "react";
import { ServicoContext } from "../../Context";
import style from "./ServicosContent.module.css";
import "../Table/Table.css";
import EditMenu from "../Table/EditMenu";
import useFetch from "../../Hooks/useFetch";
import { USER_DELETE } from "../../Api";
const ServiceTR = ({ item, i }) => {
  const { saveServiceDetails, setUpdate } = React.useContext(ServicoContext);
  const { request } = useFetch();
  const onClickDelete = () => {
    const msg = "Deseja deletar este Serviço?";
    const confirm = window.confirm(msg);
    const deleteItem = async () => {
      const { url, options } = USER_DELETE("servico", item._id);
      const { json } = await request(url, options);
      alert(json.message);
      setUpdate((n) => n + 1);
    };
    if (confirm) {
      deleteItem();
    }
  };
  const onClickEdit = () => {
    saveServiceDetails(item);
  };
  return (
    <div>
      <EditMenu
        onClickDelete={onClickDelete}
        saveInfo={onClickEdit}
        id={item._id}
      />
    </div>
  );
};
const ServicoMobile = () => {
  const { data, loading, filter, pagination } =
    React.useContext(ServicoContext);
  const [page, setPage] = React.useState(0);
  const filterData = (item, i) => {
    if (Object.values(filter).length) {
      let match = false;
      for (const [key, val] of Object.entries(filter)) {
        if (item[key].nome === val) {
          match = true;
        } else {
          return "";
        }
      }
      if (match) {
        return <ServiceTR key={i} item={item} i={i} />;
      }
      return "";
    }
    return <ServiceTR key={i} item={item} i={i} />;
  };
  if (loading) return <div>Loading</div>;

  return (
    <>
      <div className={style.tableContainer}>
        <div></div>
      </div>
    </>
  );
};

export default ServicoMobile;
