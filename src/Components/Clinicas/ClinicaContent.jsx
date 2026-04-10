import React from "react";
import { ClinicaContext } from "../../Context";
import style from "../../Styles/Content.module.css";
import "../../Styles/Table.css";
import EditMenu from "../Table/EditMenu";
import useContentAction from "../../Hooks/useContentAction";
import Loading from "../svg/Loading";
const ClinicaTR = ({ item, i }) => {
  const { saveClickClinic, setUpdate } = React.useContext(ClinicaContext);
  const { onClickDelete, onClickEdit } = useContentAction(
    item,
    setUpdate,
    saveClickClinic,
    "local",
    "Clínica",
  );
  return (
    <tr>
      <td>{item.nome}</td>
      <td>{item.endereço}</td>
      <td>{item.tabela}</td>
      <td>{item.clientes.length}</td>
      <td>{item.serviços.length}</td>

      <td>
        <EditMenu
          onClickDelete={onClickDelete}
          saveInfo={onClickEdit}
          id={item._id}
          editPath={"/clinica/editar/"}
        />
      </td>
    </tr>
  );
};
const ClinicasContent = () => {
  const { data, loading, filter, pagination } =
    React.useContext(ClinicaContext);
  const tableHeaders = ["Nome", "Endereço", "Tabela", "Clientes", "Serviços"];
  const filterData = (item, i) => {
    if (Object.values(filter).length) {
      let match = false;
      for (const [key, val] of Object.entries(filter)) {
        if (item[key].nome === val) {
          match = true;
        }
      }
      if (match) {
        return <ClinicaTR key={i} item={item} i={i} />;
      }
      return "";
    }
    return <ClinicaTR key={i} item={item} i={i} />;
  };

  if (loading) return <Loading />;

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

export default ClinicasContent;
