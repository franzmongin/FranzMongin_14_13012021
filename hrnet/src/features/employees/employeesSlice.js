import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: "user",
  initialState: {
    connected: false,
    userInfos: {},
    requestStatus: "",
    errorConnection: null,
  },
  reducers: {
    connection: (state, action) => {
      state.connected = true;
      state.errorConnection = null;
    },
    disconnection: (state) => {
      state.connected = false;
      state.token = null;
    },
    chargeUserInfos: (state, action) => {
      state.userInfos = action.payload;
    },
    changeRequestStatus: (state, action) => {
      state.requestStatus = action.payload;
    },
    logOut: (state) => {
      state.connected = false;
    },
    errorConnection: (state, action) => {
      state.errorConnection = action.payload;
    },
  },
});
export default employeesSlice.reducer;
export const {
  connection,
  disconnection,
  chargeUserInfos,
  changeRequestStatus,
  logOut,
  errorConnection,
} = employeesSlice.actions;
