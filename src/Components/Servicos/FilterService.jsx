import React from "react";
import { ServicoContext } from "../../Context";
import useMedia from "../../Hooks/useMedia";
import { SelectClinic } from "../Form/SelectClinic";
import { FilterSelectDentist } from "../Form/SelectFilterDentist";
import { Link } from "react-router-dom";
import btnStyle from "../../Styles/Button.module.css";
import style from "../../Styles/Filter.module.css";

// select date , select all dentist select clinics
const FilterService = () => {
  const { saveFilter, local, filter, cliente } =
    React.useContext(ServicoContext);
  const mobile = useMedia();
  const [clienteValue, setCliente] = React.useState(undefined);

  const onChange = (e) => {
    if (e.target.name === "local") {
      setCliente(undefined);
      saveFilter("cliente", undefined);
    } else {
      setCliente(e.target.value);
    }
    saveFilter(e.target.name, e.target.value);
  };
  return (
    <div className={style.filterContainer}>
      <SelectClinic mobile={mobile} saveFilter={onChange} local={local} />
      <FilterSelectDentist
        mobile={mobile}
        onChange={onChange}
        value={clienteValue}
        cliente={cliente}
        filter={filter}
      />
      {!mobile && (
        <Link className={btnStyle.buttonAdd} to={"/servico/novo"}>
          Add Serviço
        </Link>
      )}
    </div>
  );
};

export default FilterService;
