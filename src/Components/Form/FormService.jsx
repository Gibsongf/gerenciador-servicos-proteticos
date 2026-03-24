import React from "react";
import useForm from "../../Hooks/useForm";
import Input from "./Input";
import style from "./FormService.module.css";
import { FormSelect, FormSelectLocal } from "./SelectForm";
import { ProductSelect } from "./SelectProduct";
import { StatusDelivery } from "./SelectFinishService";
import { ServiceContext } from "../../Context";

const FormService = () => {
  const paciente = useForm();
  const cliente = useForm();
  const local = useForm();
  const status = useForm();
  const refCheckbox = React.useRef();
  const sectionRef = React.useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    let produtos = [];
    Array.from(refCheckbox.current.children).forEach((el) => {
      const { value, checked } = el.children[0];
      if (checked) {
        produtos.push(value);
      }
      return null;
    });
    const obj = {
      paciente: paciente.value,
      cliente: cliente.value,
      local: local.value,
      status: status.value,
      produtos,
    };
  };
  const onClose = (e) => {
    e.preventDefault();
  };

  return (
    <section
      ref={sectionRef}
      onSubmit={onSubmit}
      className={`${style.containerModal} `}>
      <form className={`${style.form} `}>
        <Input label="Paciente" type="text" name="paciente" {...paciente} />
        {/* remove value from cliente when local change with setCliente */}
        <FormSelectLocal
          setCliente={cliente.setValue}
          label={"Clínicas"}
          type={"local"}
          {...local}
        />
        <FormSelect
          localFilter={local.value}
          label={"Dentista"}
          type={"cliente"}
          {...cliente}
        />
        {/* to reset the box values, fix for now */}

        <StatusDelivery {...status} />
        <div className={style.btnContainer}>
          <button onClick={onClose} className={style.btnClose}>
            Cancelar
          </button>
          <button className={style.btnSalvar}>Salvar</button>
        </div>
      </form>
    </section>
  );
};

export default FormService;
