import React from "react";
import { ClienteContext } from "../../Context";
import style from "../../Styles/ContentMobile.module.css";
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
      <td>{item.endereço}</td>
      <td>{item.tabela}</td>

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
  const tableHeaders = ["Nome", "Endereço", "Tabela"];
  const filterData = (item, i) => {
    if (Object.values(filter).length) {
      let match = false;
      for (const [key, val] of Object.entries(filter)) {
        if (item[key].nome === val) {
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
              {tableHeaders.map((h) => (
                <th key={h}>{h}</th>
              ))}
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
