import React from "react";
import { ClinicaContext } from "../../Context";
import style from "../../Styles/Home.module.css";
import "../../Styles/Table.css";
import EditMenu from "../Table/EditMenu";
import useFetch from "../../Hooks/useFetch";
import { USER_DELETE } from "../../Api";
const ClinicaTR = ({ item, i }) => {
  const { saveClickClinic, setUpdate } = React.useContext(ClinicaContext);
  const { request } = useFetch();
  const onClickDelete = () => {
    const msg = "Deseja deletar este Local?";
    const confirm = window.confirm(msg);
    const deleteItem = async () => {
      const { url, options } = USER_DELETE("local", item._id);
      const { json } = await request(url, options);
      alert(json.message);
      setUpdate((n) => n + 1);
    };
    if (confirm) {
      deleteItem();
    }
  };
  const onClickEdit = () => {
    saveClickClinic(item);
  };
  return (
    <tr>
      <td>{item.nome}</td>
      <td>{item.endereço}</td>
      <td>{item.tabela}</td>
      {/* <td>Numero de serviços</td> */}
      {/* <td>Numero de Dentista</td> */}

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
  const tableHeaders = ["Nome", "Endereço", "Tabela"];
  const filterData = (item, i) => {
    console.log(item);
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
      {/* <nav className={style.ulContainer}>
        <ul>
          {data &&
            pagination.map((pg, i) => {
              let className = `${style.buttonPage}`;
              if (i == page) {
                className += " " + style.active;
              }
              return (
                <li key={i}>
                  <button className={className} onClick={() => setPage(i)}>
                    {i + 1}
                  </button>
                </li>
              );
            })}
        </ul>
      </nav> */}
    </>
  );
};

export default ClinicasContent;
