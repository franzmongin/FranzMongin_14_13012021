import React, { useEffect, useState } from "react";

function Search({
  tabledata,
  settabledata,
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
      //   console.log("tabledata2", data);
      //   console.log(Object.values(data));
      let filteredData = data.filter((el) => {
        return Object.values(el).some((value) =>
          value.toLowerCase().includes(searchInput.toLowerCase())
        );
      });

      if (activeSorting) {
        console.log(sortAsc(filteredData));
        console.log(sortDesc(filteredData));
        if (sortingDirection === "asc") {
          settabledata(sortAsc(filteredData));
        } else {
          console.log("coucou");
          settabledata(sortDesc(filteredData));
        }
      } else {
        settabledata(filteredData);
      }

      // behaviour when input is filled
    } else {
      if (activeSorting) {
        sortingDirection === "asc"
          ? settabledata(sortAsc(data))
          : settabledata(sortDesc(data));
      } else {
        settabledata(data);
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
