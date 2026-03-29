import React from "react";
import styles from "./Input.module.css";

export const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  required,
  pattern,
  placeholder,
}) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        pattern={pattern && pattern}
        placeholder={placeholder && placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
export const InputTelefone = ({ value, onChange, error, onBlur }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={"telefone"} className={styles.label}>
        Telefone
      </label>
      <input
        id={"telefone"}
        name={"telefone"}
        className={styles.input}
        type={"tel"}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={false}
        placeholder="(11) 99999-9999"
        pattern="\(\d{2}\)\s\d{5}-\d{4}"
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
