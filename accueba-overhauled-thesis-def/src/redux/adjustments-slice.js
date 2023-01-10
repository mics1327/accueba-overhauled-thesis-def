import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  employee: {
    empId: "",
    docId: "",
    name: "",
    position: "",
    contactNumber: "",
    address: "",
  },
  deductions: {},
  bonuses: {},
};

export const adjustmentsSlice = createSlice({
  name: "adjustments",
  initialState,
  reducers: {
    setAdjustment: (state, action) => {
      state.employee = action.payload.employee;
      state.deductions = action.payload.deductions;
      state.bonuses = action.payload.bonuses;
    },
    setEmployee: (state, action) => {
      state.employee = action.payload;
    },
    setDeductions: (state, action) => {
      state.deductions = action.payload;
    },
    setBonuses: (state, action) => {
      console.log("action.payload :>> ", action.payload);
      state.bonuses = action.payload;
    },
  },
});
export const { setAdjustment, setEmployee, setDeductions, setBonuses } =
  adjustmentsSlice.actions;

export default adjustmentsSlice.reducer;
