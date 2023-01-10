import React from "react";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  GridItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { primaryColor } from "../../../utilities/color-schema";

export const EmployeeNavigation = (props) => {
  const loginData = useSelector((state) => state.login);
  const navigate = useNavigate();
  console.log(loginData);
  return (
    <div className="remove-scroll">
      <GridItem h="100" pl="2" bg={primaryColor} area={"header"}>
        <Box pt="7" />
        <Text pl="10" as="b" color="white" fontSize="2xl">
          ACCUEBA
        </Text>
        <Flex pos="absolute" top="0" right="0">
          <Text as="b" fontSize="20px" color="white">
            {loginData.empFN}
          </Text>
          <Box w="2" />
        </Flex>
        <Spacer />
        <Flex
          pos="relative"
          justify="flex-end"
          boxSize="full"
          position="static"
        >
          <Breadcrumb separator="">
            <BreadcrumbItem>
              <BreadcrumbLink
                onClick={() => {
                  navigate("/employee/payroll");
                }}
              >
                <Text as="b" fontSize="20px" color="white">
                  Payroll Report
                </Text>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <Box w={10} />
            <BreadcrumbItem>
              <BreadcrumbLink
                onClick={() => {
                  navigate("/employee/information");
                }}
              >
                <Text as="b" fontSize="20px" color="white">
                  Employee Information
                </Text>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <Box w={10} />
            <BreadcrumbItem>
              <BreadcrumbLink
                onClick={() => {
                  navigate("/employee/attendance");
                }}
              >
                <Text as="b" fontSize="20px" color="white">
                  Attendance
                </Text>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <Box w={10} />
            <BreadcrumbItem>
              <Link to="/employee/settings">
                <Text as="b" fontSize="20px" color="white">
                  Settings
                </Text>
              </Link>
            </BreadcrumbItem>
            <Box w={10} />
            <BreadcrumbItem
              onClick={() => {
                navigate("/");
              }}
            >
              <Text as="b" fontSize="20px" color="white">
                Log-out
              </Text>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box w={10} />
        </Flex>
      </GridItem>
    </div>
  );
};
