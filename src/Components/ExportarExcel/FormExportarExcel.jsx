import React from "react";
import useForm from "../../Hooks/useForm";
import { FormSelectDentist, FormSelectLocal } from "../Form/SelectForm";
import formStyle from "../../Styles/Form.module.css";
import { Input } from "../Form/Input";
import { useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { UserContext } from "../../Context";
import { EXPORT_MONTH_SERVICE } from "../../Api";
import sectionStyle from "../../Styles/Home.module.css";
import style from "../../Styles/Form.module.css";
import { downloadExcelAction } from "../../utils";

const FormExportarExcel = () => {
  const { userData } = React.useContext(UserContext);
  const cliente = useForm();
  const local = useForm();
  const startDate = useForm();
  const endDate = useForm();

  const nav = useNavigate();
  const { loading } = useFetch();
  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      cliente: cliente.value,
      local: local.value,
      startDate: startDate.value,
      endDate: endDate.value,
    };
    const fileName = `${userData.fullName}-${obj.startDate}-${obj.endDate}`;
    const submit = async () => {
      const { url, options } = EXPORT_MONTH_SERVICE(obj);
      try {
        const response = await fetch(url, options);
        if (response.status === 200) {
          const blob = await response.blob();
          downloadExcelAction(blob, fileName);
          alert("Download iniciado");
          nav("/servico");
          return blob;
        }
      } catch (err) {
        throw Error(err);
      }
    };
    submit();
  };

  const onCancel = (e) => {
    e.preventDefault();
    nav("/servico");
  };
  return (
    <section className={sectionStyle.container}>
      <h1>Exportar serviço</h1>
      <form className={style.form} onSubmit={onSubmit}>
        <h3 className={style.formTitle}>Informações básicas</h3>

        <div className={formStyle.formDiv}>
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
        </div>
        <div className={formStyle.formDiv}>
          <Input
            label="Data Inicial"
            type="date"
            name="startDate"
            required={true}
            {...startDate}
          />
          <Input
            label="Data Final"
            type="date"
            name="endDate"
            required={true}
            {...endDate}
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
    </section>
  );
};

export default FormExportarExcel;
