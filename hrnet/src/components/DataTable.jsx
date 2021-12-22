import React, { useEffect, useState } from "react";
import "./DataTable.css";

function DataTable({ data, columns }) {
  const [tabledata, settabledata] = useState(data);
  const [activeSorting, setactiveSorting] = useState("");
  const [sortingDirection, setsortingDirection] = useState("asc");
  const sortAsc = () => {
    settabledata(
      data.slice().sort((a, b) => {
        let fa = a[activeSorting].toLowerCase(),
          fb = b[activeSorting].toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      })
    );
  };
  const sortDesc = () => {
    settabledata(
      data.slice().sort((a, b) => {
        let fa = a[activeSorting].toLowerCase(),
          fb = b[activeSorting].toLowerCase();

        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      })
    );
  };
  useEffect(() => {
    console.log("activeSorting", activeSorting);
    console.log("sortingDirection", sortingDirection);
    console.log("tableData", tabledata);
    if (activeSorting) {
      sortingDirection === "asc" ? sortAsc() : sortDesc();
    }
  }, [activeSorting, sortingDirection]);
  const handleChangeSorting = (e) => {
    const classNames = e.target.classList;

    if (classNames.contains("sorting_asc")) {
      e.target.classList.replace("sorting_asc", "sorting_desc");
      setactiveSorting(e.target.id.split("sorting-")[1]);
      setsortingDirection("desc");
    } else if (
      classNames.contains("sorting_desc") ||
      !classNames.contains("sorting_asc" || "sorting_desc")
    ) {
      e.target.classList.add("sorting_asc");
      e.target.classList.remove("sorting_desc");
      setactiveSorting(e.target.id.split("sorting-")[1]);
      setsortingDirection("asc");
    }
  };
  return (
    <div className="data-table-wrapper">
      <table className="dataTable display no-footer">
        <thead>
          <tr>
            {columns.map((column) => {
              return (
                <React.Fragment key={`column-title${column.title}`}>
                  <th
                    className={`sorting`}
                    id={`sorting-${column.data}`}
                    onClick={(e) => handleChangeSorting(e)}
                  >
                    {column.title}
                  </th>
                </React.Fragment>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tabledata.map((el, index) => {
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
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
