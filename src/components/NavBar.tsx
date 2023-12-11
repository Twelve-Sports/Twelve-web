import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <Box
      as="nav"
      bg="gray.50"
      h="75px"
      zIndex={2}
      boxShadow={"0px 4px 10px 2px #0002"}
    >
      <Flex
        h="100%"
        justifyContent={"end"}
        align={"center"}
        position={"relative"}
        px="10px"
      >
        <Image
          src="/img/login-logo.png"
          h="100%"
          p="5px"
          position={"absolute"}
          left="0"
          right="0"
          mx="auto"
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
