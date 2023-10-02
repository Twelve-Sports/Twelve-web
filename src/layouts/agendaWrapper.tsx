import { Box, Container, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Navbar from "../components/NavBar";

export default function AgendaWrapper({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Navbar />
      <Flex>
        <Container maxW="1280px" p={{ base: "0", md: "30px" }}>
          {children}
        </Container>
      </Flex>
    </Box>
  );
}
