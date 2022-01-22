import React, { useState } from "react";

// component which contains the buttons to change the current page by a number or by a previous or next button to navigate between pages
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

  //manage last page chunk if length of current page data is less than number of rows selected
  if (tableDataLength < numberOfRows) {
    endOfChunk = numberOfEmployees;
  }

  // if current data is empty, set begin and end of chunk equal to 0
  if (tableDataLength === 0) {
    endOfChunk = 0;
    beginOfChunk = 0;
  }

  /**
   * handler of page number click
   * @param {*} e
   */
  const handleChangePage = (e) => {
    setcurrentPage(parseInt(e.target.textContent));
  };

  /**
   * handler of previous page click
   */
  const handlePreviousPage = () => {
    setcurrentPage(currentPage - 1);
  };

  /**
   * handler of next page click
   */
  const handleNextPage = () => {
    setcurrentPage(currentPage + 1);
  };

  // Page number buttons elements if number of pages is maximum 7
  let lessOrEqualToSevenPagesJsx = [];
  for (let i = 0; i < maxPage; i++) {
    lessOrEqualToSevenPagesJsx.push(
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
          {/* Nombre de pages total de maximum 7 */}
          {maxPage <= 7 ? (
            <>
              {lessOrEqualToSevenPagesJsx.map((el, index) => {
                return (
                  <React.Fragment key={`page-changer-number${index}`}>
                    {el}
                  </React.Fragment>
                );
              })}
            </>
          ) : null}
          {/* Page courante entre 1 et 4 */}
          {currentPage < 5 && maxPage > 7 ? (
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
          {currentPage > maxPage - 4 && maxPage > 7 ? (
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
          {currentPage >= 5 && currentPage <= maxPage - 4 && maxPage > 7 ? (
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
