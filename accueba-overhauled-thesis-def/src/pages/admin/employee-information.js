import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Text,
} from "@chakra-ui/react";
import NavigationAdmin from "./components/admin-nav";
import { primaryColor } from "../../utilities/color-schema";
import axios from "../../utilities/axios";

const placeholder = "N/A";

const employeeDetailsObj = {
  empId: "",
  empFN: "",
  empAge: "",
  birthdate: "",
  gender: "",
  empContactNo: "",
  empAdd: "",
  civiliStatus: "",
  contactPerson: "",
  relationshipToContactPerson: "",
  contactPersonNumber: "",
  driverLicenseNumber: "",
  licenseType: "",
  licenseRestriction: "",
  sssNumber: "",
  philhealthNumber: "",
  pagibigNumber: "",
  tinNumber: "",
  employeePosition: "",
  modeOfPayment: "",
};

const AdminEmployeeInformation = () => {
  const [selectedEmpDocId, setSelectedEmpDocId] = useState("");
  const [employees, setEmployees] = useState([]);
  const [employeeDetails, setEmployeeDetails] = useState(employeeDetailsObj);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmployeeDetails((v) => ({ ...v, [name]: value }));
  };

  const handleValue = (property) => {
    return employeeDetails[property] !== undefined
      ? employeeDetails[property]
      : "N/A";
  };

  const editInformation = async () => {
    if (!selectedEmpDocId) return;
    const resp = await axios.post("/updateAccount", {
      id: selectedEmpDocId,
      data: employeeDetails,
    });

    const selectedEmployeeIndex = employees.findIndex(
      (emp) => emp.docId === selectedEmpDocId
    );
    if (employees[selectedEmployeeIndex].name !== employeeDetails.empFN) {
      setEmployees((v) =>
        v.map((emp) =>
          emp.docId === selectedEmpDocId
            ? { ...emp, name: employeeDetails.empFN }
            : emp
        )
      );
    }
    setSelectedEmpDocId("");
  };

  useEffect(() => {
    const getEmployees = async () => {
      const { data } = await axios.post("/get-employees");
      setEmployees(data.result);
    };

    getEmployees();
  }, []);

  useEffect(() => {
    if (!selectedEmpDocId) return setEmployeeDetails(employeeDetailsObj);
    console.log("selectedEmpDocId :>> ", selectedEmpDocId);
    const getEmployeeDetails = async () => {
      const { data } = await axios.post("/get-employee-by-doc-id", {
        docId: selectedEmpDocId,
      });
      if (data.status === 400) return alert(data.message);
      const result = data.result;
      setEmployeeDetails(result);
    };
    getEmployeeDetails();
  }, [selectedEmpDocId]);

  return (
    <>
      <NavigationAdmin />
      <Flex
        display="flex"
        // alignItems="center"
        py={2}
        px={8}
        gap={2}
        height="calc(98vh - 100px)"
      >
        {/* List */}
        <Box minW="250px" border="1px solid gray">
          <Flex borderBottom="1px solid gray" justifyContent="center">
            <p>Employee List</p>
          </Flex>
          <Box>
            {employees.map((emp) => (
              <Text
                as="button"
                display="block"
                w="100%"
                textAlign="left"
                onClick={() => setSelectedEmpDocId(emp.docId)}
                key={emp.docId}
              >
                {emp.name}
              </Text>
            ))}
          </Box>
        </Box>

        {/* Table */}
        <Flex
          w="100%"
          border="1px solid gray"
          borderRadius="10px"
          py={2}
          px={4}
          flexDirection="column"
        >
          {/* Personal Info */}
          <Grid templateColumns="repeat(5, 1fr)" gap={6} mb={2}>
            <GridItem>
              <FormControl>
                <FormLabel>
                  <Text as="b" color={primaryColor}>
                    Name
                  </Text>
                </FormLabel>
                <Input
                  placeholder="Dela Cruz, Juan S."
                  value={handleValue("empFN")}
                  name="empFN"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel className="employee_information__label">
                  <Text as="b" color={primaryColor}>
                    Age
                  </Text>
                </FormLabel>
                <Input
                  placeholder="22"
                  value={handleValue("empAge")}
                  name="empAge"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel className="employee_information__label">
                  <Text as="b" color={primaryColor}>
                    Birthdate
                  </Text>
                </FormLabel>
                <Input
                  placeholder="09/27/1999"
                  value={handleValue("birthdate")}
                  name="birthdate"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel className="employee_information__label">
                  <Text as="b" color={primaryColor}>
                    Gender
                  </Text>
                </FormLabel>
                <Input
                  placeholder="Male"
                  value={handleValue("gender")}
                  name="gender"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel className="employee_information__label">
                  <Text as="b" color={primaryColor}>
                    Contact Number
                  </Text>
                </FormLabel>
                <Input
                  placeholder="09123456789"
                  value={handleValue("empContactNo")}
                  name="empContactNo"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
          </Grid>

          {/* Address */}
          <FormControl mb={2}>
            <FormLabel>
              <Text as="b" color={primaryColor}>
                Complete Address
              </Text>
            </FormLabel>
            <Input
              placeholder="Block 23 A Maya-maya Street, Longos, Malabon City"
              value={handleValue("empAdd")}
              name="empAdd"
              onChange={handleInputChange}
            />
          </FormControl>

          {/* Contact Person */}
          <Grid templateColumns="repeat(4, 1fr)" gap={6} mb={2}>
            <GridItem>
              <FormControl>
                <FormLabel>
                  <Text as="b" color={primaryColor}>
                    Civil Status
                  </Text>
                </FormLabel>
                <Input
                  placeholder="Single"
                  value={handleValue("civiliStatus")}
                  name="civiliStatus"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>
                  <Text as="b" color={primaryColor}>
                    Contact Person
                  </Text>
                </FormLabel>
                <Input
                  placeholder={placeholder}
                  value={handleValue("contactPerson")}
                  name="contactPerson"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>
                  <Text as="b" color={primaryColor}>
                    Relationship to Contact Person
                  </Text>
                </FormLabel>
                <Input
                  placeholder={placeholder}
                  value={handleValue("relationshipToContactPerson")}
                  name="relationshipToContactPerson"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>
                  <Text as="b" color={primaryColor}>
                    Contact Person No.
                  </Text>
                </FormLabel>
                <Input
                  placeholder={placeholder}
                  value={handleValue("contactPersonNumber")}
                  name="contactPersonNumber"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
          </Grid>

          {/* Driver License */}
          <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={2}>
            <GridItem>
              <FormControl>
                <FormLabel>
                  <Text as="b" color={primaryColor}>
                    Driver's License No.
                  </Text>
                </FormLabel>
                <Input
                  placeholder={placeholder}
                  value={handleValue("driverLicenseNumber")}
                  name="driverLicenseNumber"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>
                  <Text as="b" color={primaryColor}>
                    License Type
                  </Text>
                </FormLabel>
                <Input
                  placeholder="Professional"
                  value={handleValue("licenseType")}
                  name="licenseType"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>
                  <Text as="b" color={primaryColor}>
                    License Restrictions
                  </Text>
                </FormLabel>
                <Input
                  placeholder={placeholder}
                  value={handleValue("licenseRestriction")}
                  name="licenseRestriction"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
          </Grid>

          {/* Govt ID */}
          <Grid templateColumns="repeat(4, 1fr)" gap={6} mb={2}>
            <GridItem>
              <FormControl>
                <FormLabel>
                  <Text as="b" color={primaryColor}>
                    SSS Number
                  </Text>
                </FormLabel>
                <Input
                  placeholder={placeholder}
                  value={handleValue("sssNumber")}
                  name="sssNumber"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>
                  <Text as="b" color={primaryColor}>
                    PhilHealth Number
                  </Text>
                </FormLabel>
                <Input
                  placeholder="Professional"
                  value={handleValue("philhealthNumber")}
                  name="philhealthNumber"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>
                  <Text as="b" color={primaryColor}>
                    Pag-ibig Number
                  </Text>
                </FormLabel>
                <Input
                  placeholder={placeholder}
                  value={handleValue("pagibigNumber")}
                  name="pagibigNumber"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>
                  <Text as="b" color={primaryColor}>
                    TIN Number
                  </Text>
                </FormLabel>
                <Input
                  placeholder={placeholder}
                  value={handleValue("tinNumber")}
                  name="tinNumber"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
          </Grid>

          {/* Employment Info */}
          <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={2}>
            <GridItem>
              <FormControl>
                <FormLabel>
                  <Text as="b" color={primaryColor}>
                    Employee ID
                  </Text>
                </FormLabel>
                <Input
                  placeholder={placeholder}
                  value={handleValue("empID")}
                  readOnly
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>
                  <Text as="b" color={primaryColor}>
                    Employee Position
                  </Text>
                </FormLabel>
                <Input
                  placeholder={placeholder}
                  value={handleValue("employeePosition")}
                  name="employeePosition"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>
                  <Text as="b" color={primaryColor}>
                    Mode of Payment
                  </Text>
                </FormLabel>
                <Input
                  placeholder="GCASH/Cash"
                  value={handleValue("modeOfPayment")}
                  name="modeOfPayment"
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
          </Grid>

          <Box mt="auto" textAlign="right">
            <Button
              color="white"
              backgroundColor={primaryColor}
              borderRadius="20px"
              onClick={editInformation}
            >
              <Text>Edit Information</Text>
            </Button>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default AdminEmployeeInformation;
