import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

type AgendaCardProps = {
  children: React.ReactNode;
} & FlexProps;

export default function AgendaCard({ children, ...props }: AgendaCardProps) {
  return (
    <Flex
      flexDir="column"
      boxShadow="0px 4px 4px 0px #0004"
      bg="white"
      borderRadius={{ base: "0 0 30px 30px", md: "30px" }}
      pt="10px"
      pb="30px"
      position={{ base: "relative", md: "absolute" }}
      right="0"
      left="0"
      mx="auto"
      width={{ base: "100%", md: "600px" }}
      mb={{ base: 0, md: "30px" }}
      align="center"
      {...props}
    >
      {children}
    </Flex>
  );
}
