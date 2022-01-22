import React, { useEffect, useState } from "react";
import "./DataTable.css";
import PaginationSelect from "./PaginationSelect/PaginationSelect";
import PageChanger from "./PageChanger/PageChanger";
import Search from "./Search/Search";
import TableBody from "./TableBody/TableBody";
import TableHeading from "./TableHeading/TableHeading";

function DataTable({ data, columns }) {
  const [numberOfRows, setnumberOfRows] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);
  const [maxPage, setmaxPage] = useState(0);

  // function to batch data with a given number of rows per page
  const batchDataWithPaginationSelect = (arr, size) => {
    size = parseInt(size);
    let myArray = [];
    for (var i = 0; i < arr.length; i += size) {
      myArray.push(arr.slice(i, i + size));
    }
    return myArray;
  };

  // raw data coming from props
  const [rawData, setrawData] = useState(data);

  // raw data filtering by search input
  const [rawDataWithSearch, setrawDataWithSearch] = useState(rawData);

  // data after pagination
  const [batchedData, setbatchedData] = useState(
    batchDataWithPaginationSelect(rawDataWithSearch, numberOfRows)
  );

  let numberOfEmployees = rawDataWithSearch.length;

  // change batched data (array of paginated data) on each search change
  useEffect(() => {
    setbatchedData(
      batchDataWithPaginationSelect(rawDataWithSearch, numberOfRows)
    );
  }, [rawDataWithSearch]);

  // data of the current page
  const [tabledata, settabledata] = useState(batchedData[currentPage - 1]);

  // number of rows on the current page
  let tabledataLength;
  if (tabledata === undefined) {
    tabledataLength = 0;
  } else {
    tabledataLength = tabledata.length;
  }

  // which sorting is active
  const [activeSorting, setactiveSorting] = useState("");

  // which sorting direction is active
  const [sortingDirection, setsortingDirection] = useState("asc");

  // change currentpage data with new current page
  useEffect(() => {
    settabledata(batchedData[currentPage - 1]);
  }, [currentPage]);

  // on batchedData change, set the max Page again, and set the current page data
  useEffect(() => {
    console.log(batchDataWithPaginationSelect(rawDataWithSearch, numberOfRows));
    if (batchedData !== "undefined") {
      setmaxPage(batchedData.length);
    }
    if (batchedData[currentPage - 1] === "undefined") {
      settabledata(0);
    } else {
      settabledata(batchedData[currentPage - 1]);
    }
  }, [batchedData]);

  //trigger batch when number of rows select changes
  useEffect(() => {
    setbatchedData(
      batchDataWithPaginationSelect(rawDataWithSearch, numberOfRows)
    );
  }, [numberOfRows]);

  //sort data ascending
  const sortAsc = (dat) => {
    return dat.slice().sort((a, b) => {
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
  const sortDesc = (dat) => {
    return dat.slice().sort((a, b) => {
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

  // sort data when we add a sorting on clicking on him
  useEffect(() => {
    if (activeSorting) {
      if (sortingDirection === "asc") {
        setbatchedData(
          batchDataWithPaginationSelect(
            sortAsc(rawDataWithSearch),
            numberOfRows
          )
        );
      } else {
        setbatchedData(
          batchDataWithPaginationSelect(
            sortDesc(rawDataWithSearch),
            numberOfRows
          )
        );
      }
      setcurrentPage(1);
    }
  }, [activeSorting, sortingDirection]);

  return (
    <div id="employee-table_wrapper" className="dataTables_wrapper no-footer">
      <PaginationSelect
        setnumberOfRows={setnumberOfRows}
        setcurrentPage={setcurrentPage}
      />
      <Search
        setrawDataWithSearch={setrawDataWithSearch}
        data={rawData}
        sortAsc={sortAsc}
        sortDesc={sortDesc}
        activeSorting={activeSorting}
        sortingDirection={sortingDirection}
        setcurrentPage={setcurrentPage}
      />
      <table className="dataTable display no-footer">
        <TableHeading
          columns={columns}
          activeSorting={activeSorting}
          sortingDirection={sortingDirection}
          setactiveSorting={setactiveSorting}
          setsortingDirection={setsortingDirection}
        />
        <TableBody tabledata={tabledata} columns={columns} />
      </table>
      <PageChanger
        numberOfEmployees={numberOfEmployees}
        tableDataLength={tabledataLength}
        numberOfRows={numberOfRows}
        currentPage={currentPage}
        maxPage={maxPage}
        setcurrentPage={setcurrentPage}
      />
    </div>
  );
}

export default DataTable;
