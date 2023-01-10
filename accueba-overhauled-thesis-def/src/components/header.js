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
import React from "react";
import { Link } from "react-router-dom";
import "../Styles.css";
import { primaryColor } from "../utilities/color-schema";
export const Header = () => {
  return (
    <div className="remove-scroll">
      <GridItem h="100" pl="2" bg={primaryColor} area={"header"}>
        <Box pt="7" />

        <Text pl="10" as="b" color="white" fontSize="2xl">
          ACCUEBA
        </Text>
        <Spacer />

        <Flex
          pos="relative"
          justify="flex-end"
          boxSize="full"
          position="static"
        >
          <Breadcrumb separator="">
            <BreadcrumbItem>
              <BreadcrumbLink href="/home">
                <Text as="b" fontSize="20px" color="white">
                  Home
                </Text>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/about">
                {" "}
                <Text as="b" fontSize="20px" color="white">
                  About Accueba
                </Text>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <Link to="contact">
                <Text as="b" fontSize="20px" color="white">
                  Contact Us
                </Text>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box w={10} />
        </Flex>
      </GridItem>
    </div>
  );
};
