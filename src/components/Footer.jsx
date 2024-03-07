import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="full" py="5" bg="gray.200" textAlign="center">
      <Text fontSize="sm">© {new Date().getFullYear()} My Company. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
