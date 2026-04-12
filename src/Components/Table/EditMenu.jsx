import React from "react";
import { Link } from "react-router-dom";
import styles from "./EditMenu.module.css";

const EditMenu = ({ id, editPath, saveInfo, onClickDelete }) => {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef();

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
      <button className={styles.btnActiveEdit} onClick={() => setShow(true)}>
        ...
      </button>

      <div
        ref={ref}
        id={id}
        className={`${styles.links} ${show && styles.active}`}>
        <Link onClick={saveInfo} to={editPath + id}>
          Edit
        </Link>
        <a onClick={onClickDelete}>Deletar</a>
      </div>
    </div>
  );
};

export default EditMenu;
