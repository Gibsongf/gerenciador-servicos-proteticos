import React from "react";
import useFetch from "../../Hooks/useFetch";
import { GET_LIST_CONTENT } from "../../Api";
import { ClinicaContext } from "../../Context";
import { removeDuplicate } from "../../utils";

export const ClinicaStorage = ({ children }) => {
  const { request, data, error, loading } = useFetch();
  const [filter, setFilter] = React.useState({});
  // const [cliente, setCliente] = React.useState(false);
  // const [local, setLocal] = React.useState(false);
  const [pagination, setPagination] = React.useState(1);
  const [update, setUpdate] = React.useState(1);
  const [editClinica, setEditClinica] = React.useState({});
  React.useEffect(() => {
    const req = async () => {
      const { url, options } = GET_LIST_CONTENT("local");
      const { json } = await request(url, options);
      console.log(json);
      if (json) {
        // this will just show the client or local that has a service linked to them
        // if there is none it wont show at select options html
        // setCliente(removeDuplicate(json.all.map((j) => j.cliente)));
        // setLocal(removeDuplicate(json.all.map((j) => j.local)));
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
  const saveClickClinic = (obj) => {
    let final = { ...obj };
    setEditClinica(final);
    localStorage.setItem("clinica", JSON.stringify(final));
  };
  const getStoredClinic = () => {
    if (!editClinica._id) {
      return JSON.parse(localStorage.getItem("clinica"));
    }
    return editClinica;
  };
  return (
    <ClinicaContext.Provider
      value={{
        data,
        loading,
        filter,
        error,
        setFilter,
        // cliente,
        // local,
        setUpdate,
        pagination,
        saveClickClinic,
        storedClinic: getStoredClinic(),
      }}>
      {children}
    </ClinicaContext.Provider>
  );
};
