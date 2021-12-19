import React from "react";
import "./DataTable.css";
import icon from "./sort_both.png";

function DataTable({ data, columns }) {
  console.log(data);
  console.log(columns);
  return (
    <div className="data-table">
      <div className="columns-titles">
        {columns.map((column) => {
          return (
            <>
              <div className="column-title">{column.title}</div>
              <img src={icon} alt="" />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default DataTable;
