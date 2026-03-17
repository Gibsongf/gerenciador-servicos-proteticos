import React from "react";
import useForm from "../../Hooks/useForm";
import Input from "./Input";
import style from "./FormService.module.css";
import { FormSelect, FormSelectLocal } from "./SelectForm";

const FormService = () => {
  const paciente = useForm();
  const cliente = useForm();
  const local = useForm();

  return (
    <section className={style.containerModal}>
      <form className={style.form}>
        <Input label="Paciente" type="text" name="paciente" {...paciente} />
        <FormSelectLocal label={"Clínicas: "} type={"local"} {...local} />
        <FormSelect
          localFilter={local.value}
          label={"Dentista: "}
          type={"cliente"}
          {...cliente}
        />
      </form>
    </section>
  );
};

export default FormService;
