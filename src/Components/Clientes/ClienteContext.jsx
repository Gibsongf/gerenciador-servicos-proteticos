import React from "react";
import useFetch from "../../Hooks/useFetch";
import { GET_LIST_CONTENT } from "../../Api";
import { ClienteContext } from "../../Context";
import { removeDuplicate } from "../../utils";

export const ClienteStorage = ({ children }) => {
  const { request, data, error, loading } = useFetch();
  const [filter, setFilter] = React.useState({});
  const [pagination, setPagination] = React.useState(1);
  const [update, setUpdate] = React.useState(1);
  const [local, setLocal] = React.useState();
  const [editCliente, setEditCliente] = React.useState({});

  React.useEffect(() => {
    const req = async () => {
      const { url, options } = GET_LIST_CONTENT("cliente");
      const { json } = await request(url, options);
      if (json) {
        setLocal(removeDuplicate(json.all.map((j) => j.local)));

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
    setEditCliente(final);
    localStorage.setItem("cliente", JSON.stringify(final));
  };
  const getStoredInfo = () => {
    if (!editCliente._id) {
      return JSON.parse(localStorage.getItem("cliente"));
    }
    return editCliente;
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
    <ClienteContext.Provider
      value={{
        data,
        loading,
        filter,
        error,
        saveFilter,
        setUpdate,
        pagination,
        saveInfo,
        storedCliente: getStoredInfo(),
        local,
      }}>
      {children}
    </ClienteContext.Provider>
  );
};
