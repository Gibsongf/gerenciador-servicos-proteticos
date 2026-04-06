import React from "react";
import useForm from "../../Hooks/useForm";
import { FormSelectDentist, FormSelectLocal } from "../Form/SelectForm";
import formStyle from "../../Styles/Form.module.css";
import { Input, InputTelefone } from "../Form/Input";
import { useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { UserContext } from "../../Context";

// local - required
// dentist (filter by local) - if none selected all ? or - required
// start date - required
// end date - date.now()
// some checkbox to include in the excel
// phone and Instagram
// note ?
const ExportarExcel = () => {
  const { data } = React.useContext(UserContext);
  const cliente = useForm();
  const local = useForm();
  const startDate = useForm();
  const endDate = useForm();
  const nav = useNavigate();
  const { loading } = useFetch();
  const onSubmit = () => {};
  const onCancel = (e) => {
    e.preventDefault();
    nav("/servico");
  };
  console.log(data);
  return (
    <form>
      {/* <div className={formStyle.formSelect}> */}
      <FormSelectLocal
        setCliente={cliente.setValue}
        label={"Clínicas"}
        type={"local"}
        {...local}
      />
      <FormSelectDentist
        localFilter={local.value}
        label={"Dentista"}
        type={"cliente"}
        {...cliente}
      />
      {/* </div> */}
      <div className={formStyle.formSelect}>
        <Input
          label="Data Inicial"
          type="date"
          name="startDate"
          required={false}
          {...startDate}
        />
        <Input
          label="Data Final"
          type="date"
          name="endDate"
          required={false}
          {...endDate}
        />
      </div>
      <div>
        <h4>Informações para cabeçalho</h4>
        <div className={formStyle.formSelect}>
          <InputTelefone
            label="Celular"
            name="telefone"
            required={false}
            // {...telefone}
          />
          <Input
            label="Instagram (Opcional)"
            type="text"
            name="instagram"
            required={false}
            // {...endDate}
          />
        </div>
        <Input
          label="Nome do seu Laboratório (Opcional)"
          type="text"
          name="lab"
          required={false}
          // {...endDate}
        />
      </div>
      <div className={formStyle.btnContainer}>
        <button onClick={onCancel} className={formStyle.btnClose}>
          Cancelar
        </button>
        <button className={formStyle.btnSalvar} disabled={loading}>
          Exportar
        </button>
      </div>
    </form>
  );
};

export default ExportarExcel;
