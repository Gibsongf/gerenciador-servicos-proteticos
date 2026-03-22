import style from "./Input.module.css";

export function StatusDelivery({ onChange, value }) {
  return (
    <div className={style.container}>
      <label className={style.label} htmlFor="statusEntrega">
        Finalizado:
      </label>
      <select
        className={style.inputStatus}
        name="statusEntrega"
        id="statusEntrega"
        onChange={onChange}
        value={value ? true : value}>
        <option value={false}>Não</option>
        <option value={true}>Sim</option>
      </select>
    </div>
  );
}
