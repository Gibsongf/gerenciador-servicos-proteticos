import React from "react";
import { ServiceContext } from "../../Context";
import style from "./ServicosContent.module.css";
import "../Table/Table.css";
const ServiceTR = ({ item, i }) => {
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
        <button>edit</button>
      </td>
    </tr>
  );
};
const ServicosContent = () => {
  const { data, loading, filter } = React.useContext(ServiceContext);
  const tableHeaders = ["Data", "Clinica", "Cliente", "Paciente", "Produto"];
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
        <tbody>{data && data.all.map((item, i) => filterData(item, i))}</tbody>
      </table>
    </div>
  );
};

export default ServicosContent;
