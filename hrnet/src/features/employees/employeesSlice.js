import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    numberOfRows: 10,
    currentPage: 1,
  },
  reducers: {
    changeNumberOfRows: (state, action) => {
      state.numberOfRows = action.payload;
    },
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    increaseCurrentPage: (state, action) => {
      state.currentPage += 1;
    },
    decreaseCurrentPage: (state, action) => {
      if(state.currentPage === 1){
        return
      }
      state.currentPage -= 1;
    },
  },
});
export default employeesSlice.reducer;
export const {
  changeNumberOfRows,
  changeCurrentPage,
  increaseCurrentPage,
  decreaseCurrentPage,
} = employeesSlice.actions;
