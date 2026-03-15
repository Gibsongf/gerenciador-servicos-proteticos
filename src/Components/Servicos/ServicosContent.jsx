import React from "react";
import { ServiceContext } from "../../Context";
import style from "./Servicos.module.css";

const ServicosContent = () => {
  const { data, loading, filter } = React.useContext(ServiceContext);
  const tableHeaders = ["Data", "Clinica", "Cliente", "Produto"];
  if (loading) return <div>Loading</div>;
  console.log(data);
  return (
    <section className={style.tableContainer}>
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
          {data &&
            data.all.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.dataRegistro.split("T")[0]}</td>
                  <td>{item.local.nome}</td>
                  <td>{item.cliente.nome}</td>
                  <td>
                    <div className={style.produtos}>
                      {item.produto.map((produto, indx) => (
                        <p key={i + indx}>{produto.nome}</p>
                      ))}
                    </div>
                  </td>
                  <td>
                    <button>edit</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default ServicosContent;
