import React, { useEffect, useState } from "react";
import "./DataTable.css";
import Search from "./Search/Search";
import TableBody from "./TableBody/TableBody";
import TableHeading from "./TableHeading/TableHeading";

function DataTable({ data, columns }) {
  const [tabledata, settabledata] = useState(data);
  const [activeSorting, setactiveSorting] = useState("");
  const [sortingDirection, setsortingDirection] = useState("asc");
  const [searchActive, setsearchActive] = useState(false);

  //sort data ascending
  const sortAsc = (data) => {
    return data.slice().sort((a, b) => {
      let fa = a[activeSorting].toLowerCase(),
        fb = b[activeSorting].toLowerCase();

      if (fa < fb) {
        return 1;
      }
      if (fa > fb) {
        return -1;
      }
      return 0;
    });
  };

  //sort data descending
  const sortDesc = (data) => {
    return data.slice().sort((a, b) => {
      let fa = a[activeSorting].toLowerCase(),
        fb = b[activeSorting].toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  };
  useEffect(() => {
    if (activeSorting) {
      sortingDirection === "asc"
        ? settabledata(sortAsc(tabledata))
        : settabledata(sortDesc(tabledata));
    }
  }, [activeSorting, sortingDirection]);

  // function to handle the click on a sorting heading
  const handleChangeSorting = (e) => {
    const classNames = e.target.classList;

    if (classNames.contains("sorting_asc")) {
      // e.target.classList.replace("sorting_asc", "sorting_desc");
      setactiveSorting(e.target.id.split("sorting-")[1]);
      setsortingDirection("desc");
    } else if (
      classNames.contains("sorting_desc") ||
      !classNames.contains("sorting_asc" || "sorting_desc")
    ) {
      // e.target.classList.add("sorting_asc");
      // e.target.classList.remove("sorting_desc");
      setactiveSorting(e.target.id.split("sorting-")[1]);
      setsortingDirection("asc");
    }
  };
  return (
    <div id="employee-table_wrapper" className="dataTables_wrapper no-footer">
      <Search
        tabledata={tabledata}
        settabledata={settabledata}
        data={data}
        setsearchActive={setsearchActive}
        sortAsc={sortAsc}
        sortDesc={sortDesc}
        activeSorting={activeSorting}
        sortingDirection={sortingDirection}
        tabledata={tabledata}
      />
      <table className="dataTable display no-footer">
        <TableHeading
          columns={columns}
          activeSorting={activeSorting}
          sortingDirection={sortingDirection}
          handleChangeSorting={handleChangeSorting}
        />
        <TableBody tabledata={tabledata} columns={columns} />
      </table>
    </div>
  );
}

export default DataTable;
