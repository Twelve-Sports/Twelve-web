import React from "react";
import { Box, Button, Flex, FlexProps, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export type Vacancy = {
  id: number;
  hour: string;
  totalClips: number;
};

type AgendaLineProps = {
  vacancy: Vacancy;
} & FlexProps;

export default function AgendaLine({ vacancy, ...props }: AgendaLineProps) {
  const { hour, totalClips } = vacancy;
  const hasClips = totalClips > 0;

  if (!hasClips) return null;
  return (
    <Flex
      width="100%"
      borderBottom={"1px solid #0003"}
      py="15px"
      px="25px"
      align={"center"}
      justify={"space-between"}
      fontSize={"20px"}
      bg={hasClips ? "white" : "gray.50"}
      {...props}
    >
      <Text fontWeight={"bold"} color={hasClips ? "gray.900" : "gray.300"}>
        {hour}
      </Text>
      <Box
        bg={hasClips ? "success.50" : "danger.50"}
        color={hasClips ? "success.800" : "danger.800"}
        px="5px"
        borderRadius="5px"
      >
        {hasClips ? totalClips + " disponíveis" : "Não ha videos"}
      </Box>
      <Button variant={"ghost"} isDisabled={totalClips === 0}>
        <ArrowForwardIcon h="20px" w="20px" />
      </Button>
    </Flex>
  );
}
