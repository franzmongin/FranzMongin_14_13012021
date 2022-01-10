import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./DataTable.css";
import PaginationSelect from "./PaginationSelect/PaginationSelect";
import PageChanger from "./PageChanger/PageChanger";
import Search from "./Search/Search";
import TableBody from "./TableBody/TableBody";
import TableHeading from "./TableHeading/TableHeading";
import { setMaxPage } from "../../features/employees/employeesSlice";

function DataTable({ data, columns }) {
  const numberOfRows = useSelector((state) => state.employees.numberOfRows);
  const currentPage = useSelector((state) => state.employees.currentPage);

  const batchDataWithPaginationSelect = (arr, size) => {
    let myArray = [];
    for (var i = 0; i < arr.length; i += size) {
      myArray.push(arr.slice(i, i + size));
    }
    return myArray;
  };
  const dispatch = useDispatch();

  const batchedArray = batchDataWithPaginationSelect(data, numberOfRows);
  const [batchedData, setbatchedData] = useState(batchedArray);
  const numberOfEmployees = data.length;
  const [tabledata, settabledata] = useState(batchedData[currentPage - 1]);
  const [activeSorting, setactiveSorting] = useState("");
  const [sortingDirection, setsortingDirection] = useState("asc");
  const [searchActive, setsearchActive] = useState(false);
  useEffect(() => {
    settabledata(batchedData[currentPage - 1]);
  }, [currentPage]);
  useEffect(() => {
    if (batchedArray !== "undefined") {
      console.log(batchedArray.length);
      console.log(batchedArray.length);
      dispatch(setMaxPage(batchedArray.length));
    }
  });
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

  useEffect(() => {}, [numberOfRows]);

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
      <PaginationSelect />
      <Search
        tabledata={tabledata}
        settabledata={settabledata}
        data={data}
        setsearchActive={setsearchActive}
        sortAsc={sortAsc}
        sortDesc={sortDesc}
        activeSorting={activeSorting}
        sortingDirection={sortingDirection}
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
      <PageChanger
        numberOfEmployees={numberOfEmployees}
        tableDataLength={tabledata.length}
      />
    </div>
  );
}

export default DataTable;
