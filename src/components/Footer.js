import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      backgroundColor="#0a0e1a"
      borderTop="1px solid rgba(0, 255, 136, 0.1)"
    >
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="gray.400"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Reese Phillips • Smart Contract Security Researcher • © 2025</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
