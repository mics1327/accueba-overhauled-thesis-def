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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { primaryColor } from "../../../utilities/color-schema";
// import { primaryColor } from "../../utilities/color-schema";
export const AdminLogin = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [account, setAccount] = useState({ password: "", email: "" });
  const navigate = useNavigate();
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
          Admin Login
        </Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent w="40em" h="25em">
          <ModalHeader bg={primaryColor}>
            <Center as="b" color="white">
              Administrator Log-in
            </Center>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box h="10" />
            <Container w="20em">
              <Input variant="flushed" placeholder="Employee ID" />
              <Box h="10" />
              <Input variant="flushed" placeholder="****" />
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
                      // employeeLoginFunction(navigate);
                      navigate("/admin/add-employee");
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
