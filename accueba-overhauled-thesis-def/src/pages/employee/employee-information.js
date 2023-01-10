import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { primaryColor } from "../../utilities/color-schema";
import { EmployeeNavigation } from "./components/employee-nav";
export const EmployeeInformation = (props) => {
  const loginData = useSelector((state) => state.login);
  return (
    <>
      <EmployeeNavigation />
      <Box h="10px" />
      <Text ml="12" as="b" color={primaryColor} fontSize="2xl">
        Employee Information
      </Text>
      <Box ml="4em" p={4} color="white">
        <Flex>
          <Box w="60em">
            <Text mb="8px" color={primaryColor} as="b">
              Name
            </Text>
            <Input placeholder="N/A" color="black" value={loginData.empFN} />
          </Box>
          <Box pl="2em" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Age
            </Text>
            <Input placeholder="N/A" color="black" value={loginData.emmpAge} />
          </Box>
          <Box pl="2em" />
          <Box w="60em">
            <Text mb="8px" color={primaryColor} as="b">
              Birthdate
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              value={loginData.birthdate}
            />
          </Box>
          <Box pl="2em" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Gender
            </Text>
            <Input placeholder="N/A" color="black" value={loginData.gender} />
          </Box>
          <Box pl="2em" />
          <Box w="60em">
            <Text mb="8px" color={primaryColor} as="b">
              Contact Number
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              value={loginData.contactPersonNumber}
            />
          </Box>
        </Flex>

        <Box mt="1em">
          <Text mb="8px" color={primaryColor} as="b">
            Address
          </Text>
          <Input placeholder="N/A" color="black" value={loginData.empAdd} />
        </Box>

        <Flex mt="1em">
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Civil Status
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              value={loginData.civilStatus}
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
              value={loginData.contactPerson}
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
              value={loginData.relationshipToContactPerson}
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
              value={loginData.contactPersonNumber}
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
              value={loginData.driverLicenseNumber}
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
              value={loginData.licenseType}
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
              value={loginData.licenseRestriction}
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
              value={loginData.sssNumber}
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
              value={loginData.philhealthNumber}
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
              value={loginData.pagibigNumber}
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
              value={loginData.tinNumber}
            />
          </Box>
        </Flex>

        <Flex mt="1em">
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Employee ID
            </Text>
            <Input placeholder="N/A" color="black" value={loginData.empID} />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Employee position
            </Text>
            <Input
              placeholder="N/A"
              color="black"
              value={loginData.employeePosition}
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
              value={loginData.modeOfPayment}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
