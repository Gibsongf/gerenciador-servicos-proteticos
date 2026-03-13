import React from "react";
import { ServiceContext } from "../../Context";
// {
//     "_id": "69ac9f946237065bc3c7bade",
//     "cliente": {
//         "_id": "66426c939e3aa34e1c5f078f",
//         "nome": "Fernanda Holanda",
//         "local": "664264bcb11f15fdef1e8d1c",
//         "__v": 0
//     },
//     "local": {
//         "_id": "664264bcb11f15fdef1e8d1c",
//         "nome": "Clínica Fernanda",
//         "endereço": "Dois de outubro, 126, Santa Terezinha, SBC",
//         "tabela": "Reduzido",
//         "__v": 0
//     },
//     "paciente": "yyyyyyyyy",
//     "produto": [
//         {
//             "_id": "664264bcb11f15fdef1e8d2b",
//             "nome": "BIMLER A",
//             "valor_normal": 255,
//             "valor_reduzido": 255,
//             "__v": 0
//         }
//     ],
//     "dataRegistro": "2026-03-07T21:50:52.577Z",
//     "statusEntrega": false,
//     "__v": 0
// }
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
