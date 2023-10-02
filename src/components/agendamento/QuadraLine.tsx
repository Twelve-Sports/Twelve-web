import React from "react";
import {
  Box,
  Button,
  Collapse,
  Flex,
  FlexProps,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

type AgendaLineProps = {
  courtID: number;
  courtName: string;
  consecutiveHours: number;
} & FlexProps;
export default function QuadraLine({
  courtID,
  courtName,
  consecutiveHours,
  ...props
}: AgendaLineProps) {
  const [show, setShow] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex width="100%" flexDir={"column"} borderBottom={"1px solid #0003"}>
      <Flex
        py="15px"
        px="25px"
        align={"center"}
        justify={"space-between"}
        fontSize={"20px"}
        bg={"white"}
        {...props}
      >
        <Text fontWeight={"bold"} color={"gray.900"}>
          {courtName}
        </Text>
        <Box bg={"gray.100"} px="5px" borderRadius="5px">
          {consecutiveHours + "h disponíveis"}
        </Box>
        <Button variant={"ghost"} onClick={() => setShow(!show)}>
          <ArrowForwardIcon
            h="20px"
            w="20px"
            transform={show ? "rotate(90deg)" : "rotate(0deg)"}
            transition={"all 0.3s"}
          />
        </Button>
      </Flex>
      <Collapse in={show} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          Banana
        </Box>
      </Collapse>{" "}
    </Flex>
  );
}
