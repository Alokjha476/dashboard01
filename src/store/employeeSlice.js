import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employeedata",
  initialState: { addEmployeeData: [], searchResults: [] },
  reducers: {
    addEmployee: (state, action) => {
      state.addEmployeeData.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      const { index } = action.payload;
      state.addEmployeeData = state.addEmployeeData.filter(
        (data, i) => i !== index
      );
    },
    updateEmployee: (state, action) => {
      const { dataId, updatedData } = action.payload;
      const index = state.addEmployeeData.findIndex(
        (data) => data.id === dataId
      );

      if (index !== -1) {
        state.addEmployeeData[index] = {
          ...state.addEmployeeData[index],
          ...updatedData,
        };
      }
    },
    searchEmployee: (state, action) => {
      const { empId } = action.payload;
      state.searchResults = state.addEmployeeData.filter(
        (data) => data.EmpID === empId
      );
    },
  },
});

export const { addEmployee, deleteEmployee, updateEmployee, searchEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
