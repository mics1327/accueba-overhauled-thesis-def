import React from "react";
import { EmployeeNavigation } from "./components/employee-nav";
import { Payroll } from "./payroll-report";
export const Employee = (props) => {
  return (
    <>
      <EmployeeNavigation />
      {/* IMPLEMENT ROUTES HERE */}
      <Payroll />
    </>
  );
};
