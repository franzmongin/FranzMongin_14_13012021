import React, { useEffect, useState } from "react";

function Search({
  tabledata,
  setrawDataWithSearch,
  data,
  sortingDirection,
  activeSorting,
  sortDesc,
  sortAsc,
}) {
  const [searchInput, setsearchInput] = useState("");
  const handleChangeSearch = (e) => {
    setsearchInput(e.target.value);
  };

  useEffect(() => {
    // behaviour when input in empty
    if (searchInput !== "") {
      let filteredData = data.filter((el) => {
        return Object.values(el).some((value) =>
          value.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
      console.log(filteredData);
      console.log(filteredData.length);

      // if active sorting set result after sorting else set result without sorting
      if (activeSorting) {
        console.log(sortAsc(filteredData));
        console.log(sortDesc(filteredData));
        if (sortingDirection === "asc") {
          setrawDataWithSearch(sortAsc(filteredData));
        } else {
          console.log("coucou");
          setrawDataWithSearch(sortDesc(filteredData));
        }
      } else {
        console.log("couou");
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
    console.log("tabledata", tabledata);
    console.log("activeSorting", activeSorting);
    console.log("sortingDirection", sortingDirection);
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
