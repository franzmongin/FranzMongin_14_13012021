import React, { useState } from "react";
import "./PaginationSelect.css";

function PaginationSelect({ setnumberOfRows }) {
  const handleChangePaginationSelect = (e) => {
    setnumberOfRows(e.target.value);
  };
  return (
    <div className="dataTables_length" id="employee-table_length">
      <label>
        Show
        <select
          name="employee-table_length"
          aria-controls="employee-table"
          className="PaginationSelect-select"
          onChange={handleChangePaginationSelect}
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

export default PaginationSelect;
