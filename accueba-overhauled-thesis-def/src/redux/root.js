import { configureStore } from "@reduxjs/toolkit";
import adjustmentsReducer from "./adjustments-slice";
import loginReducer from "./login-slice";
import payrollReducer from "./payroll-slice";
import transactionsReducer from "./transactions-slice";
export const store = configureStore({
  reducer: {
    login: loginReducer,
    transactions: transactionsReducer,
    adjustments: adjustmentsReducer,
    payroll: payrollReducer,
  },
});
