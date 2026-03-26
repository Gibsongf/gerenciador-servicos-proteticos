import React from "react";
import { ServicoContext } from "../../Context";
import style from "./ServicosContent.module.css";
import "../Table/Table.css";
import EditIcon from "../svg/EditIcon";
import { Link } from "react-router-dom";
const ServiceTR = ({ item, i }) => {
  const { saveServiceDetails } = React.useContext(ServicoContext);

  const onClickEdit = () => {
    saveServiceDetails(item);
  };
  return (
    <tr>
      <td>{item.dataRegistro.split("T")[0]}</td>
      <td>{item.local.nome}</td>
      <td>{item.cliente.nome}</td>
      <td>{item.paciente}</td>
      <td>
        <div className={style.produtos}>
          {item.produtos.map((p, indx) => (
            <p key={i + indx}>
              {p.produto.nome} (x{p.quantidade})
            </p>
          ))}
        </div>
      </td>
      <td>
        <Link onClick={onClickEdit} to={"/servico/editar/" + item._id}>
          <EditIcon />
        </Link>
      </td>
    </tr>
  );
};
const ServicosContent = () => {
  const { data, loading, filter, pagination } =
    React.useContext(ServicoContext);
  const tableHeaders = ["Data", "Clinica", "Cliente", "Paciente", "Produto"];
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
            {data && pagination[page].map((item, i) => filterData(item, i))}
          </tbody>
        </table>
      </div>
      <nav className={style.ulContainer}>
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
      </nav>
    </>
  );
};

export default ServicosContent;
