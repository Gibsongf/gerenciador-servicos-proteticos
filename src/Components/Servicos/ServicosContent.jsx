import React from "react";
import { ServiceContext } from "../../Context";

const ServicosContent = () => {
  const { data, loading, filter } = React.useContext(ServiceContext);
  if (loading) return <div>Loading</div>;
  // console.log(data);
  return (
    <section>
      {data &&
        data.all.map((item, i) => {
          if (filter) {
            return (
              <div key={i}>
                <div>Data: {item.dataRegistro}</div>
                <div>Local: {item.local.nome}</div>

                <div>Cliente: {item.cliente.nome}</div>
                <div>
                  Produtos:
                  {item.produto.map((p, key) => (
                    <p key={i + key}>{p.nome}</p>
                  ))}
                </div>
              </div>
            );
          }
          return (
            <div key={i}>
              <div>Data: {item.dataRegistro}</div>
              <div>Local: {item.local.nome}</div>

              <div>Cliente: {item.cliente.nome}</div>
              <div>
                Produtos:
                {item.produto.map((p, key) => (
                  <p key={i + key}>{p.nome}</p>
                ))}
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default ServicosContent;
