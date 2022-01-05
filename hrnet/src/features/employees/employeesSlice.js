import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    numberOfRows: 10,
  },
  reducers: {
    changeNumberOfRows: (state, action) => {
      state.numberOfRows = action.payload;
    },
  },
});
export default employeesSlice.reducer;
export const { changeNumberOfRows } = employeesSlice.actions;
