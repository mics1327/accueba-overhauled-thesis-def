import {
  Box,
  Button,
  Center,
  Container,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { primaryColor } from "../../../utilities/color-schema";
// import { primaryColor } from "../../utilities/color-schema";
import { setUserDetails } from "../../../redux/login-slice";
const apiUrl = "http://localhost:3030";
export const EmployeeLogin = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [account, setAccount] = useState({ password: "", email: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Button
        color="white"
        backgroundColor={primaryColor}
        variant="solid"
        height="3em"
        width={60}
        borderRadius="20px"
        onClick={onOpen}
      >
        <Text as="b" fontSize={20} _hover={{ color: primaryColor }}>
          Employee Login
        </Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent w="40em" h="25em">
          <ModalHeader bg={primaryColor}>
            <Center as="b" color="white">
              Employee Log-in
            </Center>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box h="10" />
            <Container w="20em">
              <Input
                variant="flushed"
                placeholder="Employee ID"
                onChange={(e) => {
                  setAccount({ ...account, email: e.target.value });
                }}
              />
              <Box h="10" />
              <Input
                variant="flushed"
                placeholder="****"
                onChange={(e) => {
                  setAccount({ ...account, password: e.target.value });
                }}
              />
              <Center h="7em">
                <Box
                  boxShadow="inner"
                  rounded="md"
                  bg="white"
                  borderRadius="20px"
                >
                  <Button
                    color="white"
                    backgroundColor={primaryColor}
                    variant="solid"
                    height="3em"
                    width="20em"
                    borderRadius="20px"
                    onClick={() => {
                      const apiEndPoint = `${apiUrl}/login`;
                      axios
                        .post(
                          apiEndPoint,
                          {
                            empID: parseInt(account.email),
                            password: account.password,
                          },
                          {
                            headers: {
                              "Content-Type": "application/json",
                            },
                          }
                        )
                        .then((res) => {
                          if (res.data.message === "account exists!") {
                            const responseData = res.data.result;

                            dispatch(
                              setUserDetails({
                                birthdate: responseData.birthdate,
                                civilStatus: responseData.civiliStatus,
                                contactPerson: responseData.contactPerson,
                                contactPersonNumber:
                                  responseData.contactPersonNumber,
                                driverLicenseNumber:
                                  responseData.driverLicenseNumber,
                                empAdd: responseData.empAdd,
                                empAge: responseData.empAge,
                                empContactNo: responseData.empContactNo,
                                empFN: responseData.empFN,
                                empID: responseData.empID,
                                employeePosition: responseData.employeePosition,
                                gender: responseData.gender,
                                licenseRestriction:
                                  responseData.licenseRestriction,
                                id: responseData.id,
                                licenseType: responseData.licenseType,
                                modeOfPayment: responseData.modeOfPayment,
                                pagibigNumber: responseData.pagibigNumber,
                                philhealthNumber: responseData.philhealthNumber,
                                regType: responseData.regType,
                                relationshipToContactPerson:
                                  responseData.relationshipToContactPerson,
                                sssNumber: responseData.sssNumber,
                                tinNumber: responseData.tinNumber,
                              })
                            );

                            navigate("/employee/payroll");
                          }
                          console.log(res);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    <Text as="b" fontSize={15} _hover={{ color: primaryColor }}>
                      Login
                    </Text>
                  </Button>
                </Box>
              </Center>
              <Center>
                <Button color="#A0AEC0" variant="ghost" opacity=".5">
                  Forgot password?
                </Button>
              </Center>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
