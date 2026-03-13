import React from "react";
import useFetch from "../../Hooks/useFetch";
import { GET_LIST_CONTENT } from "../../Api";
import { ServiceContext } from "../../Context";

export const ServiceStorage = ({ children }) => {
  const { request, data, error, loading } = useFetch();
  const [filter, setFilter] = React.useState(false);
  const [cliente, setCliente] = React.useState(false);
  const [local, setLocal] = React.useState(false);

  React.useEffect(() => {
    const req = async () => {
      const { url, options } = GET_LIST_CONTENT("servico");
      const { json } = await request(url, options);
      if (json) {
        setCliente(() => {
          let obj = json.all.map((j) => j.cliente);
          
          return obj;
        });
        setLocal(json.all.map((j) => j.local));
      }
    };
    req();
  }, [request]);
  return (
    <ServiceContext.Provider
      value={{ data, loading, filter, error, setFilter, cliente, local }}>
      {children}
    </ServiceContext.Provider>
  );
};
