import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  totalDeliveryPaid: 0,
  totalHours: 0,
  totalWages: 0,
  salaryAdvance: 0,
  debt: 0,
  excess: 0,
  philhealth: 0,
  pagibig: 0,
  sss: 0,
  loan: 0,
  totalDeductions: 0,
};

export const payrollSlice = createSlice({
  name: "payroll",
  initialState,
  reducers: {
    setPayroll: (state, action) => {
      state.totalDeliveryPaid = action.payload.totalDeliveryPaid;
      state.totalHours = action.payload.totalHours;
      state.totalWages = action.payload.totalWages;
      state.salaryAdvance = action.payload.salaryAdvance;
      state.debt = action.payload.debt;
      state.excess = action.payload.excess;
      state.philhealth = action.payload.philhealth;
      state.pagibig = action.payload.pagibig;
      state.sss = action.payload.sss;
      state.loan = action.payload.loan;
      state.totalDeductions = action.payload.totalDeductions;
    },
    unsetPayroll: (state, action) => {
      state.totalDeliveryPaid = "";
      state.totalHours = "";
      state.totalWages = "";
      state.salaryAdvance = "";
      state.debt = "";
      state.excess = "";
      state.philhealth = "";
      state.pagibig = "";
      state.sss = "";
      state.loan = "";
      state.totalDeductions = "";
    },
  },
});
export const { setPayroll, unsetPayroll } = payrollSlice.actions;

export default payrollSlice.reducer;
