import {
  Box,
  Center,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Text,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { primaryColor } from "../../utilities/color-schema";
import "./Styles.css";

export const Payroll = (props) => {
  const login = useSelector((state) => state.login);
  const [payroll, setPayroll] = useState({
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
  });

  useEffect(() => {
    axios
      .post("http://localhost:3030/getLatestPayroll", {
        id: login.empID,
      })
      .then((res) => {
        const responseData = res.data;

        setPayroll({
          totalDeliveryPaid: responseData.result.totalDeliveryPaid,
          totalHours: responseData.result.totalHours,
          totalWages: responseData.result.totalWages,
          salaryAdvance: responseData.result.salaryAdvance,
          debt: responseData.result.debt,
          excess: responseData.result.excess,
          philhealth: responseData.result.philhealth,
          pagibig: responseData.result.pagibig,
          sss: responseData.result.sss,
          loan: responseData.result.loan,
          totalDeductions: responseData.result.totalDeductions,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {};
  }, []);

  return (
    <>
      <Box h="30px" />
      <Center>
        <Box
          w="60em"
          h="50em"
          borderWidth="2px"
          borderRadius="lg"
          overflow="hidden"
          pos="relative"
        >
          <Box h="2" />
          <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
            Payroll Report
          </Text>
          <Flex pos="absolute" top="0" right="5">
            <Text p="1" color={primaryColor} as="b" fontSize="1.2em">
              Latest Payroll
            </Text>
            <Box w="2" />
          </Flex>

          <Center>
            <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
              Earnings
            </Text>
          </Center>
          {/* BORDER */}
          <Center>
            <TableContainer>
              <Table size="md">
                <Tbody>
                  <Tr>
                    <td className="table-padding-left-only ">
                      <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
                        Total Delivery Paid
                      </Text>
                    </td>
                    <td className="table-padding">
                      <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
                        {payroll.totalDeliveryPaid}
                      </Text>
                    </td>
                  </Tr>
                  <Tr>
                    <td className="table-padding-left-only ">
                      <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
                        Paid Days
                      </Text>
                    </td>
                    <td className="table-padding">
                      <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
                        {payroll.totalHours / 24}
                      </Text>
                    </td>
                  </Tr>
                  <Tr>
                    <td className="table-padding-left-only">
                      <Text
                        textAlign="left"
                        p="5"
                        color={primaryColor}
                        as="b"
                        fontSize="1.2em"
                      >
                        Total Wages
                      </Text>
                    </td>
                    <td className="table-padding">
                      <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
                        {payroll.totalWages}
                      </Text>
                    </td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Center>

          <Center>
            <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
              Deduction
            </Text>
          </Center>

          <Center>
            {" "}
            <TableContainer>
              <Table size="md">
                <Tbody>
                  <Tr>
                    <td className="table-padding-left-only ">
                      <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
                        Salary Advance
                      </Text>
                    </td>
                    <td className="table-padding">
                      <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
                        {payroll.salaryAdvance}
                      </Text>
                    </td>
                  </Tr>
                  <Tr>
                    <td className="table-padding-left-only ">
                      <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
                        Debt
                      </Text>
                    </td>
                    <td className="table-padding">
                      <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
                        {payroll.debt}
                      </Text>
                    </td>
                  </Tr>
                  <Tr>
                    <td className="table-padding-left-only">
                      <Text
                        textAlign="left"
                        p="5"
                        color={primaryColor}
                        as="b"
                        fontSize="1.2em"
                      >
                        Excess
                      </Text>
                    </td>
                    <td className="table-padding">
                      <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
                        {payroll.excess}
                      </Text>
                    </td>
                  </Tr>
                  <Tr>
                    <td className="table-padding-left-only">
                      <Text
                        textAlign="left"
                        p="5"
                        color={primaryColor}
                        as="b"
                        fontSize="1.2em"
                      >
                        Philhealth
                      </Text>
                    </td>
                    <td className="table-padding">
                      <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
                        {payroll.philhealth}
                      </Text>
                    </td>
                  </Tr>
                  <Tr>
                    <td className="table-padding-left-only">
                      <Text
                        textAlign="left"
                        p="5"
                        color={primaryColor}
                        as="b"
                        fontSize="1.2em"
                      >
                        Pag-ibig
                      </Text>
                    </td>
                    <td className="table-padding">
                      <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
                        {payroll.pagibig}
                      </Text>
                    </td>
                  </Tr>
                  <Tr>
                    <td className="table-padding-left-only">
                      <Text
                        textAlign="left"
                        p="5"
                        color={primaryColor}
                        as="b"
                        fontSize="1.2em"
                      >
                        SSS
                      </Text>
                    </td>
                    <td className="table-padding">
                      <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
                        {payroll.sss}
                      </Text>
                    </td>
                  </Tr>{" "}
                  <Tr>
                    <td className="table-padding-left-only">
                      <Text
                        textAlign="left"
                        p="5"
                        color={primaryColor}
                        as="b"
                        fontSize="1.2em"
                      >
                        Loan
                      </Text>
                    </td>
                    <td className="table-padding">
                      <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
                        {payroll.loan}
                      </Text>
                    </td>
                  </Tr>
                  <Tr>
                    <td className="table-padding-left-only">
                      <Text
                        textAlign="left"
                        p="5"
                        color={primaryColor}
                        as="b"
                        fontSize="1.2em"
                      >
                        Total Deduction
                      </Text>
                    </td>
                    <td className="table-padding">
                      <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
                        {payroll.totalDeductions}
                      </Text>
                    </td>
                  </Tr>
                  <Box h="20px" />
                  <Tr>
                    <td className="table-padding-left-only remove-border">
                      <Text
                        textAlign="left"
                        p="5"
                        color={primaryColor}
                        as="b"
                        fontSize="1.2em"
                      >
                        Netpay
                      </Text>
                    </td>
                    <td className="table-padding remove-border-right">
                      <Text p="5" color={primaryColor} as="b" fontSize="1.2em">
                        {payroll.totalWages - payroll.totalDeductions}
                      </Text>
                    </td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Center>
        </Box>
      </Center>
    </>
  );
};
