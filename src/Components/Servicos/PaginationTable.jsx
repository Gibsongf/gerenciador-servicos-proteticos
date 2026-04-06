import React from "react";
import style from "../../Styles/Content.module.css";
const PaginationTable = ({ data, pagination, page, setPage }) => {
  return (
    <nav className={style.ulContainer}>
      <ul>
        {data &&
          pagination.map((pg, i) => {
            let className = `${style.buttonPage}`;
            if (i == page) {
              className += " " + style.active;
            }
            return (
              <li key={i}>
                <button className={className} onClick={() => setPage(i)}>
                  {i + 1}
                </button>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default PaginationTable;
