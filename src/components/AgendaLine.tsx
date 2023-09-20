import React from "react";
import { Box, Button, Flex, FlexProps, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export type Vacancy = {
  id: number;
  horario: string;
  quadrasDisp: number;
};

type AgendaLineProps = {
  vacancy: Vacancy;
} & FlexProps;
export default function AgendaLine({vacancy,...props}:AgendaLineProps){
	const {horario, quadrasDisp} = vacancy;
	const hasCourts = quadrasDisp > 0;
	return(
		<Flex 
			width="100%" 
			borderBottom={"1px solid #0003"} 
			py="15px" 
			align={"center"}
			justify={"space-between"}
			fontSize={"20px"}
			{...props}
		>
			<Text fontWeight={"bold"} color={hasCourts?"gray.900":"gray.300"}>
				{horario}
			</Text>
			<Box 
				bg={hasCourts ? "success.50":"danger.50"}
				color ={hasCourts ? "success.800":"danger.800"}
				px="5px"
				borderRadius="5px"
			>
				{hasCourts ? quadrasDisp+" disponíveis":"Indisponível"}
			</Box>
			<Button variant={"ghost"} isDisabled={quadrasDisp===0}>
				<ArrowForwardIcon h="20px" w="20px"/>
			</Button>
		</Flex>
	);
}