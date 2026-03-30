import React from "react";
import useFetch from "../../Hooks/useFetch";
import { GET_LIST_CONTENT } from "../../Api";
import { ClinicaContext } from "../../Context";

export const ClinicaStorage = ({ children }) => {
  const { request, data, error, loading } = useFetch();
  const [filter, setFilter] = React.useState({});
  const [pagination, setPagination] = React.useState(1);
  const [update, setUpdate] = React.useState(1);
  const [editClinica, setEditClinica] = React.useState({});
  React.useEffect(() => {
    const req = async () => {
      const { url, options } = GET_LIST_CONTENT("local");
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
        setUpdate,
        pagination,
        saveClickClinic,
        storedClinic: getStoredClinic(),
      }}>
      {children}
    </ClinicaContext.Provider>
  );
};
