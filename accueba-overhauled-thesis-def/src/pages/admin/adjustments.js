import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import NavigationAdmin from "./components/admin-nav";
import { primaryColor } from "../../utilities/color-schema";
import DeductionModal from "./components/deduction-modal";
import BonusesModal from "./components/bonuses-modal";
import axios from "../../utilities/axios";
import { useDispatch, useSelector } from "react-redux";
import { setAdjustment } from "../../redux/adjustments-slice";

const Adjustments = () => {
  const deductionModalClosure = useDisclosure();
  const bonusModalClosure = useDisclosure();
  const [employeeNumber, setEmployeeNumber] = useState("");
  const { employee, deductions, bonuses } = useSelector(
    (state) => state.adjustments
  );
  const dispatch = useDispatch();

  const handleSearchEmployee = async () => {
    const { data } = await axios.post("/getAdjustments", {
      empId: employeeNumber,
    });

    // console.log("data :>> ", data);

    if (data.status === 400) return;

    const { empFN, employeePosition, empContactNo, empAdd, id } =
      data.result.employee;
    dispatch(
      setAdjustment({
        employee: {
          empId: employeeNumber,
          docId: id,
          name: empFN,
          position: employeePosition,
          contactNumber: empContactNo,
          address: empAdd,
        },
        bonuses: data.result.bonuses,
        deductions: data.result.deductions,
      })
    );
  };

  return (
    <>
      <NavigationAdmin />

      <Flex px={10} py={4}>
        <Box mr={6}>
          <Box mb={4}>
            <Text as="b" color={primaryColor}>
              Employee Number
            </Text>
            <Input
              // placeholder="N/A"
              my={5}
              onChange={(e) => {
                setEmployeeNumber(e.target.value);
              }}
              value={employeeNumber}
            />
            <Box textAlign="center">
              <Button
                color="white"
                backgroundColor={primaryColor}
                variant="solid"
                borderRadius="20px"
                onClick={handleSearchEmployee}
              >
                <Text as="b" _hover={{ color: primaryColor }}>
                  Search Employee
                </Text>
              </Button>
            </Box>
          </Box>

          <Box>
            <Box>
              <Text as="b" color={primaryColor}>
                Employee name
              </Text>
              <Input
                placeholder="Kyle Company"
                _placeholder={{
                  fontWeight: "bold",
                }}
                readOnly
                value={employee.name}
              />
            </Box>

            <Box>
              <Text as="b" color={primaryColor}>
                Position
              </Text>
              <Input
                _placeholder={{
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                placeholder="Driver"
                readOnly
                value={employee.position}
              />
            </Box>

            <Box>
              <Text as="b" color={primaryColor}>
                Contact Number
              </Text>
              <Input
                placeholder="09123456789"
                readOnly
                value={employee.contactNumber}
              />
            </Box>

            <Box mb={4}>
              <Text as="b" color={primaryColor}>
                Address
              </Text>
              <Input
                placeholder="Block 23 A Maya-maya Street Longos, Malabon City"
                readOnly
                value={employee.address}
              />
            </Box>

            <Button
              color="white"
              backgroundColor={primaryColor}
              variant="solid"
              borderRadius="20px"
            >
              <Text as="b" _hover={{ color: primaryColor }}>
                Release Payroll Report
              </Text>
            </Button>
          </Box>
        </Box>

        <Box border="1px solid grey" flexGrow="1" borderRadius="20px">
          <Flex borderBottom="1px solid gray" p={6}>
            {/* Deductions */}
            <Box mr={6}>
              <Text as="b" color={primaryColor}>
                Deductions
              </Text>
              <TableContainer my={4}>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>
                        <Text as="b" color={primaryColor}>
                          Details
                        </Text>
                      </Th>
                      <Th>
                        <Text as="b" color={primaryColor}>
                          Value
                        </Text>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {Object.entries(deductions).map(([k, v]) => {
                      return (
                        <Tr key={k}>
                          <Td>{k}</Td>
                          <Td>{v}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
              <Box textAlign="center">
                <Button
                  color="white"
                  backgroundColor={primaryColor}
                  variant="solid"
                  borderRadius="20px"
                  onClick={deductionModalClosure.onOpen}
                >
                  <Text as="b">Add Deductions</Text>
                </Button>
              </Box>
            </Box>

            {/* Bonuses */}
            <Box>
              <Text as="b" color={primaryColor}>
                Bonuses
              </Text>
              <TableContainer my={4}>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>
                        <Text as="b" color={primaryColor}>
                          Details
                        </Text>
                      </Th>
                      <Th>
                        <Text as="b" color={primaryColor}>
                          Value
                        </Text>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {Object.entries(bonuses).map(([k, v]) => {
                      return (
                        <Tr key={k}>
                          <Td textTransform="capitalize">{k}</Td>
                          <Td>{v}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
              <Box textAlign="center">
                <Button
                  color="white"
                  backgroundColor={primaryColor}
                  variant="solid"
                  borderRadius="20px"
                  onClick={bonusModalClosure.onOpen}
                >
                  <Text as="b">Add Bonuses</Text>
                </Button>
              </Box>
            </Box>
          </Flex>

          <Box textAlign="center">
            <Text as="b" color={primaryColor}>
              Payslip
            </Text>
          </Box>
        </Box>

        <DeductionModal
          isOpen={deductionModalClosure.isOpen}
          onClose={deductionModalClosure.onClose}
        />
        <BonusesModal
          isOpen={bonusModalClosure.isOpen}
          onClose={bonusModalClosure.onClose}
        />
      </Flex>
    </>
  );
};

export default Adjustments;
