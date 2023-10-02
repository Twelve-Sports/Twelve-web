import React from "react";
import { Button, Flex, FlexProps } from "@chakra-ui/react";

type SportSelectorProps = {
  sports: {
    id: number;
    name: string;
    icon?: React.JSX.Element;
  }[];
  selectedSport: number;
  setSelectedSport: (sportId: number) => void;
} & FlexProps;

export default function SportSelector({
  sports,
  selectedSport,
  setSelectedSport,
  width = "200px",
  ...props
}: SportSelectorProps) {
  return (
    <Flex flexDir="column" width={width} {...props}>
      {sports.map((sport) => (
        <Button
          key={sport.id}
          onClick={() => setSelectedSport(sport.id)}
          colorScheme={selectedSport === sport.id ? "brand" : "gray"}
          variant={selectedSport === sport.id ? "solid" : "outline"}
          border="1px solid #AAA"
          gridGap={"4px"}
          justifyContent={"left"}
        >
          {sport.icon}
          {sport.name}
        </Button>
      ))}
    </Flex>
  );
}
