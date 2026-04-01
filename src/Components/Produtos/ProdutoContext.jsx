import React from "react";
import useFetch from "../../Hooks/useFetch";
import { GET_LIST_CONTENT } from "../../Api";
import { ProdutoContext } from "../../Context";

export const ProdutoStorage = ({ children }) => {
  const { request, data, error, loading } = useFetch();
  const [filter, setFilter] = React.useState({});
  const [pagination, setPagination] = React.useState(1);
  const [update, setUpdate] = React.useState(1);
  const [editProduto, setEditProduto] = React.useState({});

  React.useEffect(() => {
    const req = async () => {
      const { url, options } = GET_LIST_CONTENT("produto");
      const { json } = await request(url, options);
      if (json) {
        let index = 0;
        const lst = [[]];
        json.all.forEach((j) => {
          if (lst[index].length - 1 >= 4) {
            index++;
            lst.push([]);
          }
          lst[index].push(j);
        });
        setPagination(lst);
      }
    };
    req();
  }, [request, update]);
  const saveInfo = (obj) => {
    let final = { ...obj };
    setEditProduto(final);
    localStorage.setItem("produto", JSON.stringify(final));
  };
  const getStoredInfo = () => {
    if (!editProduto._id) {
      return JSON.parse(localStorage.getItem("produto"));
    }
    return editProduto;
  };
  const saveFilter = ({ target }) => {
    setFilter((filter) => {
      if (!target.value) {
        const newFilter = { ...filter };
        delete newFilter[target.name];
        return { ...newFilter };
      }
      return { ...filter, [target.name]: target.value };
    });
  };
  return (
    <ProdutoContext.Provider
      value={{
        data,
        loading,
        filter,
        error,
        saveFilter,
        setUpdate,
        pagination,
        saveInfo,
        storedProduto: getStoredInfo(),
      }}>
      {children}
    </ProdutoContext.Provider>
  );
};
