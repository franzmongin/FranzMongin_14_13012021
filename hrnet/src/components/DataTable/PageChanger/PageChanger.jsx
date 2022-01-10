import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCurrentPage,
  decreaseCurrentPage,
} from "../../../features/employees/employeesSlice";
import TableBody from "../TableBody/TableBody";

function PageChanger({ numberOfEmployees, tableDataLength }) {
  const numberOfRows = useSelector((state) => state.employees.numberOfRows);
  const currentPage = useSelector((state) => state.employees.currentPage);
  console.log(numberOfEmployees, currentPage);

  let beginOfChunk = numberOfRows * currentPage - numberOfRows;
  let endOfChunk = numberOfRows * currentPage;
  if (tableDataLength < numberOfRows) {
    endOfChunk = numberOfEmployees;
  }
  const dispatch = useDispatch();
  const handlePreviousPage = () => {
    dispatch(decreaseCurrentPage());
  };
  const handleNextPage = () => {
    dispatch(increaseCurrentPage());
  };
  return (
    <>
      <div
        className="dataTables_info"
        id="employee-table_info"
        role="status"
        aria-live="polite"
      >
        Showing {beginOfChunk} to {endOfChunk} of {numberOfEmployees} entries
      </div>
      <div
        className="dataTables_paginate paging_simple_numbers"
        id="employee-table_paginate"
      >
        <button
          className="paginate_button previous disabled"
          aria-controls="employee-table"
          tabIndex="-1"
          id="employee-table_previous"
          onClick={handlePreviousPage}
        >
          Previous
        </button>
        <span>
          <button
            className="paginate_button current"
            aria-controls="employee-table"
            tabIndex="0"
          >
            1
          </button>
        </span>
        <button
          className="paginate_button next disabled"
          aria-controls="employee-table"
          tabIndex="-1"
          id="employee-table_next"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default PageChanger;
