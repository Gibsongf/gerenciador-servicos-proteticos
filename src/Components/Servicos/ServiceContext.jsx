import React from "react";
import useFetch from "../../Hooks/useFetch";
import { GET_LIST_CONTENT } from "../../Api";
import { ServiceContext } from "../../Context";
import { removeDuplicate } from "../../utils";

export const ServiceStorage = ({ children }) => {
  const { request, data, error, loading } = useFetch();
  const [filter, setFilter] = React.useState({});
  const [cliente, setCliente] = React.useState(false);
  const [local, setLocal] = React.useState(false);
  const [update, setUpdate] = React.useState([]);

  React.useEffect(() => {
    const req = async () => {
      const { url, options } = GET_LIST_CONTENT("servico");
      const { json } = await request(url, options);
      if (json) {
        // console.log(json);
        // this will just show the client or local that has a service linked to them
        // if there is none it wont show at select options html
        setCliente(removeDuplicate(json.all.map((j) => j.cliente)));
        setLocal(removeDuplicate(json.all.map((j) => j.local)));
      }
    };
    req();
  }, [request, update.length]);
  return (
    <ServiceContext.Provider
      value={{
        data,
        loading,
        filter,
        error,
        setFilter,
        cliente,
        local,
        setUpdate,
      }}>
      {children}
    </ServiceContext.Provider>
  );
};
