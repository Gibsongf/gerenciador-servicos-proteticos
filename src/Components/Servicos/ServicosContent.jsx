import React from "react";
import { ServicoContext } from "../../Context";
import style from "../../Styles/Content.module.css";
import "../../Styles/Table.css";
import EditMenu from "../Table/EditMenu";
import useContentAction from "../../Hooks/useContentAction";
import Loading from "../svg/Loading";
const ServiceTR = ({ item, i }) => {
  const { saveService, setUpdate } = React.useContext(ServicoContext);
  const { onClickDelete, onClickEdit } = useContentAction(
    item,
    setUpdate,
    saveService,
    "servico",
    "Serviço",
  );

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
        <EditMenu
          onClickDelete={onClickDelete}
          saveInfo={onClickEdit}
          id={item._id}
          editPath={"/servico/editar/"}
        />
      </td>
    </tr>
  );
};
const ServicosContent = () => {
  const { data, loading, filter } = React.useContext(ServicoContext);
  const tableHeaders = ["Data", "Clinica", "Cliente", "Paciente", "Produto"];
  const filterData = (item, i) => {
    if (Object.values(filter).length) {
      let match = false;
      for (const [key, val] of Object.entries(filter)) {
        if (item[key]._id === val) {
          match = true;
        } else {
          match = false;
        }
      }
      if (match) {
        return <ServiceTR key={i} item={item} i={i} />;
      }
      return "";
    }
    return <ServiceTR key={i} item={item} i={i} />;
  };

  if (loading) return <Loading />;

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
