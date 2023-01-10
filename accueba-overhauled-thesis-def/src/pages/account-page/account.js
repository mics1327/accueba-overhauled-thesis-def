import { Box, Button, Center, Divider, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { primaryColor } from "../../utilities/color-schema";
import { AdminLogin } from "./components/admin-login-popup-modal";
import { EmployeeLogin } from "./components/employee-login-popup-modal";
export const Account = (props) => {
  return (
    <>
      <Header />
      <VStack h="737">
        <Divider orientation="vertical" />
        <Flex direction="row" h="90em" maxHeight="300em">
          <Box ml="10em">
            <Center marginLeft="42em">
              <Flex direction="column">
                <Box
                  boxShadow="inner"
                  rounded="md"
                  bg="white"
                  borderRadius="20px"
                >
                  <AdminLogin />
                </Box>
                <Box h="20px" />
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
                    width={60}
                    borderRadius="20px"
                  >
                    <EmployeeLogin />
                  </Button>
                </Box>
              </Flex>
            </Center>
          </Box>
        </Flex>
      </VStack>
      <Footer />
    </>
  );
};
