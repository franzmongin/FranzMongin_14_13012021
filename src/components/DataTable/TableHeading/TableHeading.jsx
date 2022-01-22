import React from "react";


// contains the thead of the Datatable
function TableHeading({
  columns,
  activeSorting,
  sortingDirection,
  setactiveSorting,
  setsortingDirection,
}) {
  // function to handle the click on a sorting heading
  const handleChangeSorting = (e) => {
    const classNames = e.target.classList;

    if (classNames.contains("sorting_asc")) {
      setactiveSorting(e.target.id.split("sorting-")[1]);
      setsortingDirection("desc");
    } else if (
      classNames.contains("sorting_desc") ||
      !classNames.contains("sorting_asc" || "sorting_desc")
    ) {
      setactiveSorting(e.target.id.split("sorting-")[1]);
      setsortingDirection("asc");
    }
  };
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
