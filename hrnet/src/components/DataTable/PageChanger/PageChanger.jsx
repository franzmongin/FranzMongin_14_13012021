import React, { useState } from "react";

function PageChanger({
  numberOfEmployees,
  tableDataLength,
  numberOfRows,
  currentPage,
  maxPage,
  setcurrentPage,
}) {
  let beginOfChunk = numberOfRows * currentPage - numberOfRows;
  let endOfChunk = numberOfRows * currentPage;
  if (tableDataLength < numberOfRows) {
    endOfChunk = numberOfEmployees;
  }
  if (tableDataLength === 0) {
    endOfChunk = 0;
    beginOfChunk = 0;
  }
  let lessOrEqualToFivePagesJsx = [];
  const handleChangePage = (e) => {
    console.log(e.target.textContent);
    setcurrentPage(parseInt(e.target.textContent));
  };
  for (let i = 0; i < maxPage; i++) {
    lessOrEqualToFivePagesJsx.push(
      <button
        className={`paginate_button${currentPage === i + 1 ? " current" : ""}`}
        aria-controls="employee-table"
        tabIndex="0"
        onClick={handleChangePage}
      >
        {i + 1}
      </button>
    );
  }
  const handlePreviousPage = () => {
    setcurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    setcurrentPage(currentPage + 1);
  };

  return (
    <>
      <span>
        current Page is {currentPage} and maxPage is {maxPage} and (max Page -
        5) is {maxPage - 5}
      </span>
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
          {maxPage <= 5 ? (
            <>
              {lessOrEqualToFivePagesJsx.map((el, index) => {
                return (
                  <React.Fragment key={`page-changer-number${index}`}>
                    {el}
                  </React.Fragment>
                );
              })}
            </>
          ) : null}
          {/* Page courante entre 1 et 4 */}
          {currentPage < 5 && maxPage > 5 ? (
            <>
              <span>vers le début</span>
              <button
                className={`paginate_button${
                  currentPage === 1 ? " current" : ""
                }`}
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                1
              </button>
              <button
                className={`paginate_button${
                  currentPage === 2 ? " current" : ""
                }`}
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                2
              </button>
              <button
                className={`paginate_button${
                  currentPage === 3 ? " current" : ""
                }`}
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                3
              </button>
              <button
                className={`paginate_button${
                  currentPage === 4 ? " current" : ""
                }`}
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                4
              </button>
              <button
                className={`paginate_button${
                  currentPage === 5 ? " current" : ""
                }`}
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                5
              </button>
              <span className="ellipsis">...</span>
              <button
                className="paginate_button"
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                {maxPage}
              </button>
            </>
          ) : null}

          {/* quatre dernières pages  */}
          {currentPage > maxPage - 4 && maxPage > 5 ? (
            <>
              <span>vers la fin</span>
              <button
                className={`paginate_button${
                  currentPage === 5 ? " current" : ""
                }`}
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                1
              </button>
              <span className="ellipsis">...</span>

              <button
                className={`paginate_button${
                  currentPage === maxPage - 4 ? " current" : ""
                }`}
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                {maxPage - 4}
              </button>
              <button
                className={`paginate_button${
                  currentPage === maxPage - 3 ? " current" : ""
                }`}
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                {maxPage - 3}
              </button>
              <button
                className={`paginate_button${
                  currentPage === maxPage - 2 ? " current" : ""
                }`}
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                {maxPage - 2}
              </button>
              <button
                className={`paginate_button${
                  currentPage === maxPage - 1 ? " current" : ""
                }`}
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                {maxPage - 1}
              </button>
              <button
                className={`paginate_button${
                  currentPage === maxPage ? " current" : ""
                }`}
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                {maxPage}
              </button>
            </>
          ) : null}

          {/* entre la 5ème pages inclue et la cinquième dernière page inclue*/}
          {currentPage >= 5 && currentPage <= maxPage - 4 && maxPage > 5 ? (
            <>
              <span>entre les deux</span>
              <button
                className="paginate_button"
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                1
              </button>
              <span className="ellipsis">...</span>
              <button
                className="paginate_button"
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                {currentPage - 1}
              </button>
              <button
                className="paginate_button current"
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                {currentPage}
              </button>
              <button
                className="paginate_button"
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                {currentPage + 1}
              </button>
              <span className="ellipsis">...</span>
              <button
                className="paginate_button"
                aria-controls="employee-table"
                tabIndex="0"
                onClick={handleChangePage}
              >
                {maxPage}
              </button>
            </>
          ) : null}
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
