import React from "react";
import { ClienteContext } from "../../Context";
import style from "../../Styles/Content.module.css";
import EditMenu from "../Table/EditMenu";
import useContentAction from "../../Hooks/useContentAction";
const Tr = ({ item }) => {
  const { saveInfo, setUpdate } = React.useContext(ClienteContext);
  const { onClickDelete, onClickEdit } = useContentAction(
    item,
    setUpdate,
    saveInfo,
    "cliente",
    "Cliente",
  );
  return (
    <tr>
      <td>{item.nome}</td>
      <td>{item.local.nome}</td>
      <td>{item.local.endereço}</td>
      <td className={style.servicoQtd}>{item.serviços.length}</td>

      <td>
        <EditMenu
          onClickDelete={onClickDelete}
          saveInfo={onClickEdit}
          id={item._id}
          editPath={"/cliente/editar/"}
        />
      </td>
    </tr>
  );
};
const ClientesContent = () => {
  const { data, loading, filter } = React.useContext(ClienteContext);
  const filterData = (item, i) => {
    if (Object.values(filter).length) {
      let match = false;
      for (const [key, val] of Object.entries(filter)) {
        if (item[key]._id === val) {
          match = true;
        }
      }
      if (match) {
        return <Tr key={i} item={item} i={i} />;
      }
      return "";
    }
    return <Tr key={i} item={item} i={i} />;
  };

  if (loading) return <div>Loading</div>;

  return (
    <>
      <div className={style.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Clínica</th>
              <th>Endereço</th>
              <th className={style.servicoQtd}>Serviços</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {data && data.all.map((item, i) => filterData(item, i))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ClientesContent;
