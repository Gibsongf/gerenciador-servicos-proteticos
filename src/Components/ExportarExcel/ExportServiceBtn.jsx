import React from "react";
import ExportIcon from "../svg/ExportIcon";
import style from "./ExportService.module.css";
import { Link } from "react-router-dom";

const ExportServiceBtn = () => {
  return (
    <Link to="/exportar" className={style.exportContainer}>
      <ExportIcon />
      <p>Exportar Excel</p>
    </Link>
  );
};

export default ExportServiceBtn;
