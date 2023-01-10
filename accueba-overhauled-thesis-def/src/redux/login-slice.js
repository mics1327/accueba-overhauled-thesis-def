import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  birthdate: "",
  civilStatus: "",
  contactPerson: "",
  contactPersonNumber: "",
  driverLicenseNumber: "",
  empAdd: "",
  empAge: "",
  empContactNo: "",
  empFN: "",
  empID: 0,
  employeePosition: "",
  gender: "",
  licenseRestriction: "",
  id: "",
  licenseType: "",
  modeOfPayment: "",
  pagibigNumber: "",
  philhealthNumber: "",
  regType: "",
  relationshipToContactPerson: "",
  sssNumber: "",
  tinNumber: "",
};
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.birthdate = action.payload.birthdate;
      state.id = action.payload.id;
      state.civilStatus = action.payload.civilStatus;
      state.contactPersonNumber = action.payload.contactPersonNumber;
      state.driverLicenseNumber = action.payload.driverLicenseNumber;
      state.contactPerson = action.payload.contactPerson;
      state.empAdd = action.payload.empAdd;
      state.empAge = action.payload.empAge;
      state.empFN = action.payload.empFN;
      state.empID = action.payload.empID;
      state.employeePosition = action.payload.employeePosition;
      state.gender = action.payload.gender;
      state.licenseRestriction = action.payload.licenseRestriction;
      state.licenseType = action.payload.licenseType;
      state.modeOfPayment = action.payload.modeOfPayment;
      state.pagibigNumber = action.payload.pagibigNumber;
      state.philhealthNumber = action.payload.philhealthNumber;
      state.regType = action.payload.regType;
      state.relationshipToContactPerson =
        action.payload.relationshipToContactPerson;
      state.sssNumber = action.payload.sssNumber;
      state.tinNumber = action.payload.tinNumber;
    },
    unsetUserDetails: (state, action) => {
      state.birthdate = "";
      state.id = "";
      state.civilStatus = "";
      state.contactPersonNumber = "";
      state.driverLicenseNumber = "";
      state.contactPerson = "";
      state.empAdd = "";
      state.empAge = "";
      state.empFN = "";
      state.empID = "";
      state.employeePosition = "";
      state.gender = "";
      state.licenseRestriction = "";
      state.licenseType = "";
      state.modeOfPayment = "";
      state.pagibigNumber = "";
      state.philhealthNumber = "";
      state.regType = "";
      state.relationshipToContactPerson = "";
      state.sssNumber = "";
      state.tinNumber = "";
    },
  },
});
export const { unsetUser, setUserDetails } = loginSlice.actions;

export default loginSlice.reducer;
