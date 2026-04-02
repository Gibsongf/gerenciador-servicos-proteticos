import React from "react";
import { Link } from "react-router-dom";
import styles from "./DropDown.module.css";
import ConfigSvg from "../svg/Config";
import ExitIcon from "../svg/ExitIcon";
import { DownArrow, UpArrow } from "../svg/DropArrow";
import useMedia from "../../Hooks/useMedia";

const DropDownConfig = () => {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef();
  const mobile = useMedia();
  React.useEffect(() => {
    const clickOutside = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      setShow(false);
    };
    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [ref]);
  return (
    <div className={styles.container}>
      <button className={styles.buttonActive} onClick={() => setShow(true)}>
        {!mobile && "Minha Conta"}
        {show ? (
          <UpArrow className={styles.activeArrow} />
        ) : (
          <DownArrow className={styles.activeArrow} />
        )}
      </button>

      <div ref={ref} className={`${styles.links} ${show && styles.active}`}>
        <Link
          onClick={() => setShow(false)}
          className={styles.config}
          to={"/conta"}>
          {" "}
          <ConfigSvg />
          Configurações
        </Link>
        <Link className={`${styles.config} ${styles.exit}`}>
          <ExitIcon /> Sair
        </Link>
      </div>
    </div>
  );
};

export default DropDownConfig;
