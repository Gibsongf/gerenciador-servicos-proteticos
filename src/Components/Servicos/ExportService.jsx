import React from "react";
import ExportIcon from "../svg/ExportIcon";
import style from "./Servicos.module.css";

const ExportService = () => {
  return (
    <button className={style.exportContainer}>
      <ExportIcon />
      <p>Exportar Excel</p>
    </button>
  );
};

export default ExportService;
