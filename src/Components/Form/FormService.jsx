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

  const { modal, setModal } = React.useContext(ServiceContext);
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
  React.useEffect(() => {
    const clickOutside = (e) => {
      if (e.target === sectionRef.current) {
        setModal(false);
      }
    };
    window.addEventListener("click", clickOutside);
    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, [sectionRef, setModal]);

  return (
    <section
      ref={sectionRef}
      // style={{ display: modal ? "flex" : "none" }}
      onSubmit={onSubmit}
      className={`${style.containerModal} ${modal ? style.active : ""}`}>
      <form className={`${style.form} ${modal ? style.active : ""}`}>
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
        {/* to reset the box, fix for now */}
        {modal && <ProductSelect label={"Produtos"} ref={refCheckbox} />}
        <StatusDelivery {...status} />
        <button>Confirmar</button>
      </form>
    </section>
  );
};

export default FormService;
