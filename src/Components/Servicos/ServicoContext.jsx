import React from "react";
import useFetch from "../../Hooks/useFetch";
import { GET_LIST_CONTENT } from "../../Api";
import { ServicoContext } from "../../Context";
import { removeDuplicate } from "../../utils";

export const ServicoStorage = ({ children }) => {
  const { request, data, error, loading } = useFetch();
  const [filter, setFilter] = React.useState({});
  const [cliente, setCliente] = React.useState(false);
  const [local, setLocal] = React.useState(false);
  const [pagination, setPagination] = React.useState(1);
  const [update, setUpdate] = React.useState(1);
  const [editService, setEditService] = React.useState({});
  React.useEffect(() => {
    const req = async () => {
      const { url, options } = GET_LIST_CONTENT("servico");
      const { json } = await request(url, options);
      if (json) {
        // this will just show the client or local that has a service linked to them
        // if there is none it wont show at select options html
        setCliente(removeDuplicate(json.all.map((j) => j.cliente)));
        setLocal(removeDuplicate(json.all.map((j) => j.local)));
        let index = 0;
        const lst = [[]];
        json.all.forEach((j) => {
          j.match = false;
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
  const saveService = (service) => {
    let final = { ...service };
    final.dataRegistro = final.dataRegistro.split("T")[0];
    setEditService(final);
    localStorage.setItem("service", JSON.stringify(final));
  };
  const getServiceDetails = () => {
    if (!editService._id) {
      return JSON.parse(localStorage.getItem("service"));
    }
    return editService;
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
    <ServicoContext.Provider
      value={{
        data,
        loading,
        filter,
        error,
        saveFilter,
        cliente,
        local,
        setUpdate,
        pagination,
        saveService,
        serviceDetails: getServiceDetails(),
      }}>
      {children}
    </ServicoContext.Provider>
  );
};
