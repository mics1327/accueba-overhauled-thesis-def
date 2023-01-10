import React from "react";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Menu,
  Flex,
  GridItem,
  Text,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { primaryColor } from "../../../utilities/color-schema";

const NavigationAdmin = () => {
  return (
    <>
      <div className="remove-scroll">
        <GridItem h="100" pl="2" bg={primaryColor} area={"header"}>
          <Box pt="7" />
          <Text pl="10" as="b" color="white" fontSize="2xl">
            ACCUEBA
          </Text>

          <Flex
            pos="relative"
            justify="flex-end"
            boxSize="full"
            position="static"
          >
            {/* <Breadcrumb separator="">
              <BreadcrumbItem>
                <BreadcrumbLink href="/employee">
                  <Text as="b" fontSize="20px" color="white">
                    Employee Information
                  </Text>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <Box w={10} />
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin/add-employee">
                  <Text as="b" fontSize="20px" color="white">
                    Add Employee
                  </Text>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <Box w={10} />
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Text as="b" fontSize="20px" color="white">
                    Transaction
                  </Text>
                </BreadcrumbLink>
              </BreadcrumbItem>{" "}
              <Box w={10} />
              <BreadcrumbItem isCurrentPage>
                <Link to="/employee/settings">
                  <Text as="b" fontSize="20px" color="white">
                    Payroll
                  </Text>
                </Link>
              </BreadcrumbItem>
              <Box w={10} />
              <BreadcrumbItem isCurrentPage>
                <Link to="/">
                  <Text as="b" fontSize="20px" color="white">
                    Settings
                  </Text>
                </Link>
              </BreadcrumbItem>
              <Box w={10} />
              <BreadcrumbItem isCurrentPage>
                <Link to="/">
                  <Text as="b" fontSize="20px" color="white">
                    Log-out
                  </Text>
                </Link>
              </BreadcrumbItem>
            </Breadcrumb> */}
            <ul style={{ listStyle: "none", display: "flex", gap: "40px" }}>
              <li>
                <Link to="/admin/employee">
                  <Text as="b" fontSize="20px" color="white">
                    Employee Information
                  </Text>
                </Link>
              </li>
              <li>
                <Link to="/admin/add-employee">
                  <Text as="b" fontSize="20px" color="white">
                    Add Employee
                  </Text>
                </Link>
              </li>
              <li>
                <Link to="/admin/transaction">
                  <Text as="b" fontSize="20px" color="white">
                    Transaction
                  </Text>
                </Link>
              </li>
              <li>
                <Menu>
                  <MenuButton
                    as={Button}
                    color="white"
                    backgroundColor={primaryColor}
                    height="initial"
                    _hover={{ background: primaryColor }}
                    _expanded={{ background: primaryColor }}
                  >
                    <Text as="b" fontSize={20}>
                      Payroll
                    </Text>
                  </MenuButton>
                  <MenuList color="white" backgroundColor={primaryColor}>
                    <MenuItem
                      _hover={{ background: primaryColor }}
                      _focus={{ background: primaryColor }}
                    >
                      <Link to="/admin/payroll/attendance">
                        <Text as="b" fontSize="20px" color="white">
                          Attendance
                        </Text>
                      </Link>
                    </MenuItem>

                    <MenuItem
                      _hover={{ background: primaryColor }}
                      _focus={{ background: primaryColor }}
                    >
                      <Link to="/admin/payroll/adjustments">
                        <Text as="b" fontSize="20px" color="white">
                          Adjustments
                        </Text>
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </li>
              <li>
                <Link to="/">
                  <Text as="b" fontSize="20px" color="white">
                    Settings
                  </Text>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Text as="b" fontSize="20px" color="white">
                    Log-out
                  </Text>
                </Link>
              </li>
            </ul>
            <Box w={10} />
          </Flex>
        </GridItem>
      </div>
    </>
  );
};

export default NavigationAdmin;
