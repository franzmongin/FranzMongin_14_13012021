import React from "react";

function TableHeading({
  columns,
  activeSorting,
  sortingDirection,
  handleChangeSorting,
 }) {
  return (
    <thead>
      <tr>
        {columns.map((column) => {
          return (
            <React.Fragment key={`column-title-${column.title}`}>
              <th
                className={`sorting ${
                  column.data === activeSorting
                    ? `sorting_${sortingDirection}`
                    : ``
                }`}
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
  );
}

export default TableHeading;
