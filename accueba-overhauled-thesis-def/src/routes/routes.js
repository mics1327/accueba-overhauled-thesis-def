import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "../components/nav-pages/about";
import { Contact } from "../components/nav-pages/contact";
import { Home } from "../components/nav-pages/home";
import ErrorPage from "../pages/404";
import { Account } from "../pages/account-page/account";
import Adjustments from "../pages/admin/adjustments";
import { AdminHomePageInformation } from "../pages/admin/admin";
import { AdminRegisterPage } from "../pages/admin/admin-register";
import AttendanceAdmin from "../pages/admin/attendance";
import AdminEmployeeInformation from "../pages/admin/employee-information";
import Transaction from "../pages/admin/transaction";
import { Attendance } from "../pages/employee/attendance";
import { EmployeeInformation } from "../pages/employee/employee-information";
import { Employee } from "../pages/employee/employee-page";
import { Payroll } from "../pages/employee/payroll-report";

export const AppRouter = () => {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Account />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employee/payroll" element={<Employee />} />
          <Route
            path="/employee/information"
            element={<EmployeeInformation />}
          />
          <Route path="/employee/settings" element={<Employee />} />
          <Route path="/employee/attendance" element={<Attendance />} />
          <Route path="/admin" element={<AdminHomePageInformation />} />
          <Route path="/admin/add-employee" element={<AdminRegisterPage />} />
          <Route
            path="/admin/employee"
            element={<AdminEmployeeInformation />}
          />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route
            path="/admin/payroll/attendance"
            element={<AttendanceAdmin />}
          />
          <Route path="/admin/payroll/adjustments" element={<Adjustments />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
