import React, { useEffect, useState } from "react";

function Search({
  setrawDataWithSearch,
  data,
  sortingDirection,
  activeSorting,
  sortDesc,
  sortAsc,
  setcurrentPage,
}) {
  const [searchInput, setsearchInput] = useState("");
  const handleChangeSearch = (e) => {
    setsearchInput(e.target.value);
  };

  // effect to handle the search when the input changes
  useEffect(() => {
    // behaviour when input in empty
    if (searchInput !== "") {
      let filteredData = data.filter((el) => {
        return Object.values(el).some((value) =>
          value.toLowerCase().includes(searchInput.toLowerCase())
        );
      });

      // if active sorting set result after sorting else set result without sorting
      if (activeSorting) {
        if (sortingDirection === "asc") {
          setrawDataWithSearch(sortAsc(filteredData));
        } else {
          setrawDataWithSearch(sortDesc(filteredData));
        }
      } else {
        setrawDataWithSearch(filteredData);
      }

      // behaviour when input is filled
    } else {
      if (activeSorting) {
        sortingDirection === "asc"
          ? setrawDataWithSearch(sortAsc(data))
          : setrawDataWithSearch(sortDesc(data));
      } else {
        setrawDataWithSearch(data);
      }
    }
    setcurrentPage(1);
  }, [searchInput]);
  return (
    <div id="employee-table_filter" className="dataTables_filter">
      <label>
        Search:
        <input
          type="search"
          aria-controls="employee-table"
          onChange={handleChangeSearch}
        />
      </label>
    </div>
  );
}

export default Search;
