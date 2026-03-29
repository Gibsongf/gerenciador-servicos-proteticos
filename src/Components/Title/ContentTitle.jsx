import React from "react";
import style from "../../Styles/Home.module.css";
import { Link } from "react-router-dom";
import btnStyle from "../Button/Button.module.css";

// select date , sel
export const MobileTitle = ({ path, text }) => {
  return (
    <div className={style.mobileTitle}>
      <Title text={text} />
      <Link className={btnStyle.buttonAdd} to={path}>
        {text}
      </Link>
    </div>
  );
};
export const Title = ({ text }) => {
  return <h1 className={style.pageTitle}>{text}</h1>;
};
