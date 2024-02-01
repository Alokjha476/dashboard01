import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";

const store = configureStore({
  reducer: {
    employeedata: employeeReducer,
  },
});

export default store;
