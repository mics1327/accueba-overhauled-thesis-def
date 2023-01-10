import { GridItem } from "@chakra-ui/react";
import React from "react";
import { primaryColor } from "../utilities/color-schema";
import "./Styles.css";

export const Footer = () => {
  return (
    <footer>
      <GridItem
        position="absolute"
        h="calc(100% - 60px)"
        bg={primaryColor}
        area={"footer"}
      />
    </footer>
  );
};
