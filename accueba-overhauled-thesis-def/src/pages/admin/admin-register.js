import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { primaryColor } from "../../utilities/color-schema";
import NavigationAdmin from "./components/admin-nav";

const apiUrl = "http://localhost:3030";
export const AdminRegisterPage = (props) => {
  const [information, setInformation] = useState({
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
    empID: "",
    employeePosition: "",
    modeOfPayment: "",
    empPassword: "",
    regType: 2,
  });
  console.log(apiUrl);
  return (
    <>
      <NavigationAdmin />
      <Box h="10px" />
      <Text ml="12" as="b" color={primaryColor} fontSize="2xl">
        Register Employee
      </Text>
      <Box ml="4em" p={4} color="white">
        <Flex>
          <Box w="60em">
            <Text mb="8px" color={primaryColor} as="b">
              Name
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({ ...information, empFN: e.target.value });
              }}
            />
          </Box>
          <Box pl="2em" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Age
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({ ...information, empAge: e.target.value });
              }}
            />
          </Box>
          <Box pl="2em" />
          <Box w="60em">
            <Text mb="8px" color={primaryColor} as="b">
              Birthdate
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({ ...information, birthdate: e.target.value });
              }}
            />
          </Box>
          <Box pl="2em" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Gender
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({ ...information, gender: e.target.value });
              }}
            />
          </Box>
          <Box pl="2em" />
          <Box w="60em">
            <Text mb="8px" color={primaryColor} as="b">
              Contact Number
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({
                  ...information,
                  empContactNo: e.target.value,
                });
              }}
            />
          </Box>
        </Flex>
        <Box mt="1em">
          <Text mb="8px" color={primaryColor} as="b">
            Address
          </Text>
          <Input
            placeholder="N/A"
            color="black"
            onChange={(e) => {
              setInformation({ ...information, empAdd: e.target.value });
            }}
          />
        </Box>
        <Box mt="1em">
          <Text mb="8px" color={primaryColor} as="b">
            Password
          </Text>
          <Input
            placeholder="N/A"
            color="black"
            onChange={(e) => {
              setInformation({ ...information, empPassword: e.target.value });
            }}
          />
        </Box>
        <Flex mt="1em">
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Civil Status
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({
                  ...information,
                  civiliStatus: e.target.value,
                });
              }}
            />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Contact Person
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({
                  ...information,
                  contactPerson: e.target.value,
                });
              }}
            />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Relationship to contact person
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({
                  ...information,
                  relationshipToContactPerson: e.target.value,
                });
              }}
            />
          </Box>
          <Box w="20px" />
          <Box w="30em">
            <Text mb="8px" color={primaryColor} as="b">
              Contact Person No.
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({
                  ...information,
                  contactPersonNumber: e.target.value,
                });
              }}
            />
          </Box>
        </Flex>
        <Flex mt="1em">
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Driver's License No.
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({
                  ...information,
                  driverLicenseNumber: e.target.value,
                });
              }}
            />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              License Type
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({ ...information, licenseType: e.target.value });
              }}
            />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              License Restrictions
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({
                  ...information,
                  licenseRestriction: e.target.value,
                });
              }}
            />
          </Box>
        </Flex>
        <Flex mt="1em">
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              SSS Number
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({ ...information, sssNumber: e.target.value });
              }}
            />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Philhealth Number
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({
                  ...information,
                  philhealthNumber: e.target.value,
                });
              }}
            />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Pag-ibig Number
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({
                  ...information,
                  pagibigNumber: e.target.value,
                });
              }}
            />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              TIN Number
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({ ...information, tinNumber: e.target.value });
              }}
            />
          </Box>
        </Flex>
        <Flex mt="1em">
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Employee ID
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({ ...information, empID: e.target.value });
              }}
            />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Employee position
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              onChange={(e) => {
                setInformation({
                  ...information,
                  employeePosition: e.target.value,
                });
              }}
            />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Mode of Payment
            </Text>
            <Input
              placeholder="LN/A"
              color="black"
              onChange={(e) => {
                setInformation({
                  ...information,
                  modeOfPayment: e.target.value,
                });
              }}
            />
          </Box>
        </Flex>{" "}
        <Center>
          <Box mt="1em">
            <Button
              color="white"
              backgroundColor={primaryColor}
              variant="solid"
              height="3em"
              width="20em"
              borderRadius="20px"
              onClick={() => {
                const apiEndPoint = `${apiUrl}/register`;
                console.log(apiUrl);
                axios
                  .post(
                    apiEndPoint,
                    { data: information },
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  )
                  .then((res) => {
                    //   if (res.data.message !== "no account found") {
                    //     // navigate("/employee/payroll");
                    //   }
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              <Text as="b" fontSize={15} _hover={{ color: primaryColor }}>
                Submit
              </Text>
            </Button>
          </Box>
        </Center>
      </Box>
    </>
  );
};
