import React from "react";

// contains the tbody of the current page table
function TableBody({ tabledata, columns }) {
  return (
    <tbody>
      {tabledata
        ? tabledata.map((el, index) => {
            return (
              <tr
                key={`${el.firstName}-${el.lastName}-${index}`}
                className={`${index % 2 === 0 ? "odd" : "even"}`}
              >
                {columns.map((col) => {
                  return (
                    <td key={`${col.title}-${col.data}`}>{el[col.data]}</td>
                  );
                })}
              </tr>
            );
          })
        : null}
    </tbody>
  );
}

export default TableBody;
