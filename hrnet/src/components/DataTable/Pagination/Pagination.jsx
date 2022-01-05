import React, { useState } from "react";
import "./Pagination.css";
import { useSelector, useDispatch } from "react-redux";
import { changeNumberOfRows } from "../../../features/employees/employeesSlice";

function Pagination() {
  const [currentPage, setcurrentPage] = useState(1);
  const dispatch = useDispatch();
  const handleChangePagination = (e) => {
    dispatch(changeNumberOfRows(e.target.value));
  };
  return (
    <div className="dataTables_length" id="employee-table_length">
      <label>
        Show
        <select
          name="employee-table_length"
          aria-controls="employee-table"
          className="pagination-select"
          onChange={handleChangePagination}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        entries
      </label>
    </div>
  );
}

export default Pagination;
