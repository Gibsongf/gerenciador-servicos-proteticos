import React from "react";
import { ProdutoContext } from "../../Context";
import style from "../../Styles/Content.module.css";
import EditMenu from "../Table/EditMenu";
import useContentAction from "../../Hooks/useContentAction";
const Tr = ({ item }) => {
  const { saveInfo, setUpdate } = React.useContext(ProdutoContext);
  const { onClickDelete, onClickEdit } = useContentAction(
    item,
    setUpdate,
    saveInfo,
    "produto",
    "Produtos",
  );
  return (
    <tr>
      <td>{item.nome}</td>
      <td>R$: {item.valor_normal.toFixed(2)}</td>
      <td>R$: {item.valor_reduzido.toFixed(2)}</td>
      {/* <td className={style.servicoQtd}>{item.serviços.length}</td> */}

      <td>
        <EditMenu
          onClickDelete={onClickDelete}
          saveInfo={onClickEdit}
          id={item._id}
          editPath={"/produto/editar/"}
        />
      </td>
    </tr>
  );
};
const ProdutosContent = () => {
  const { data, loading, filter } = React.useContext(ProdutoContext);
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
              <th>Nome</th>
              <th>Normal</th>
              <th>Reduzido</th>
              {/* <th className={style.servicoQtd}>Serviços</th> */}
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

export default ProdutosContent;
