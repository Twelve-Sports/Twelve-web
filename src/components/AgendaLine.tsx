import React, { useState } from "react";
import { Box, Flex, FlexProps, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export type Vacancy = {
  id: number;
  horario: string;
  quadrasDisp: number;
};

type AgendaLineProps = {
  vacancy: Vacancy;
} & FlexProps;
export default function AgendaLine({ vacancy, ...props }: AgendaLineProps) {
  const { horario, quadrasDisp } = vacancy;
  const hasCourts = quadrasDisp > 0;
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 70);
  };
  return (
    <Flex
      width="100%"
      borderBottom={"1px solid #0003"}
      py="15px"
      px="25px"
      align={"center"}
      justify={"space-between"}
      fontSize={"20px"}
      bg={clicked ? "gray.200" : hasCourts ? "white" : "gray.50"}
      onClick={hasCourts ? handleClick : undefined}
      cursor={hasCourts ? "pointer" : undefined}
      transition="background-color 0.2s ease"
      {...props}
    >
      <Text fontWeight={"bold"} color={hasCourts ? "gray.900" : "gray.300"}>
        {horario}
      </Text>
      <Box
        bg={hasCourts ? "success.50" : "danger.50"}
        color={hasCourts ? "success.800" : "danger.800"}
        px="7px"
        pb="3px"
        borderRadius="5px"
        fontWeight="semibold"
      >
        {hasCourts ? quadrasDisp + " disponíveis" : "Indisponível"}
      </Box>
      <Box
        as="button"
        height="24px"
        lineHeight="1.2"
        px="8px"
        fontSize="14px"
        borderColor="#00FFFF"
        color={hasCourts ? "#4b4f56" : "#B7B7B7"}
        disabled={!hasCourts}
      >
        <ArrowForwardIcon h="20px" w="20px" />
      </Box>
    </Flex>
  );
}
