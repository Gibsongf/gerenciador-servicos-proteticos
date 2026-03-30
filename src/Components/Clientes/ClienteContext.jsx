import React from "react";
import useFetch from "../../Hooks/useFetch";
import { GET_LIST_CONTENT } from "../../Api";
import { ClienteContext } from "../../Context";

export const ClienteStorage = ({ children }) => {
  const { request, data, error, loading } = useFetch();
  const [filter, setFilter] = React.useState({});
  const [pagination, setPagination] = React.useState(1);
  const [update, setUpdate] = React.useState(1);
  const [editCliente, setEditCliente] = React.useState({});
  React.useEffect(() => {
    const req = async () => {
      const { url, options } = GET_LIST_CONTENT("cliente");
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
    setEditCliente(final);
    localStorage.setItem("cliente", JSON.stringify(final));
  };
  const getStoredInfo = () => {
    if (!editCliente._id) {
      return JSON.parse(localStorage.getItem("cliente"));
    }
    return editCliente;
  };
  return (
    <ClienteContext.Provider
      value={{
        data,
        loading,
        filter,
        error,
        setFilter,
        setUpdate,
        pagination,
        saveInfo,
        storedClinic: getStoredInfo(),
      }}>
      {children}
    </ClienteContext.Provider>
  );
};
