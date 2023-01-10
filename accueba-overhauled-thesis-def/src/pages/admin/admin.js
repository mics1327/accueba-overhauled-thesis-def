import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { primaryColor } from "../../utilities/color-schema";
import NavigationAdmin from "./components/admin-nav";

export const AdminHomePageInformation = (props) => {
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
            <Input placeholder="N/A" color="black" />
          </Box>
          <Box pl="2em" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Age
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>
          <Box pl="2em" />
          <Box w="60em">
            <Text mb="8px" color={primaryColor} as="b">
              Birthdate
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>
          <Box pl="2em" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Gender
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>
          <Box pl="2em" />
          <Box w="60em">
            <Text mb="8px" color={primaryColor} as="b">
              Contact Number
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>
        </Flex>

        <Box mt="1em">
          <Text mb="8px" color={primaryColor} as="b">
            Address
          </Text>
          <Input placeholder="N/A" color="black" />
        </Box>

        <Flex mt="1em">
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Civil Status
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Contact Person
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Relationship to contact person
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>
          <Box w="20px" />
          <Box w="30em">
            <Text mb="8px" color={primaryColor} as="b">
              Contact Person No.
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>
        </Flex>

        <Flex mt="1em">
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Driver's License No.
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              License Type
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              License Restrictions
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>
        </Flex>

        <Flex mt="1em">
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              SSS Number
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Philhealth Number
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Pag-ibig Number
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              TIN Number
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>
        </Flex>

        <Flex mt="1em">
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Employee ID
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Employee position
            </Text>
            <Input placeholder="N/A" color="black" />
          </Box>

          <Box w="20px" />
          <Box w="20em">
            <Text mb="8px" color={primaryColor} as="b">
              Mode of Payment
            </Text>
            <Input placeholder="LN/A" color="black" />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
