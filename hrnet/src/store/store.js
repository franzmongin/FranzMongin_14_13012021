import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../features/employees/employeesSlice";

const store = configureStore({ reducer: { user: employeesReducer } });

export default store;
