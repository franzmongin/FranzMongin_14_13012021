import React, { useState } from "react";
import "./DataTable.css";

function DataTable({ data, columns }) {
  console.log("data", data);
  console.log(columns);
  const [tabledata, settabledata] = useState(data);
  const [activeSorting, setactiveSorting] = useState("");
  return (
    <div className="data-table-wrapper">
      <table>
        <thead>
          <tr>
            {columns.map((column) => {
              return (
                <React.Fragment key={`column-title${column.title}`}>
                  <th className={`sorting sorting-${column.data}`}>
                    {column.title}
                  </th>
                </React.Fragment>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((el) => {
            console.log(el.firstName);
            return (
              <tr key={`${el.firstName} ${el.lastName}`}>
                {columns.map((col) => {
                  return (
                    <td key={`${col.title}-${col.data}`}>{el[col.data]}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
