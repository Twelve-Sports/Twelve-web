import "keen-slider/keen-slider.min.css";

import * as React from "react";
import { useEffect } from "react";

import { Flex, FlexProps, Text } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

export type SlidingMenuItem = {
  label: string;
  row: React.ReactNode;
  onClick: () => void;
};

export type SlidingMenuProps = {
  title?: string;
  horarios: SlidingMenuItem[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  quadras: any[];
  selectedOption?: SlidingMenuItem;
  setSelectedOption: React.Dispatch<
    React.SetStateAction<SlidingMenuItem | undefined>
  >;
  updateOnChange?: number;
} & FlexProps;

export default function SlidingMenu({
  title,
  horarios,
  quadras,
  selectedOption,
  setSelectedOption,
  updateOnChange,
  ...props
}: SlidingMenuProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    drag: false,
    initial: 0,
    slides: {
      spacing: 10,
    },
  });

  function onClickRow(index: number) {
    if (!instanceRef) return;
    if (index >= 0) {
      setSelectedOption(horarios[index]);
    }
  }

  function onClickBack() {
    if (!instanceRef) return;
    setSelectedOption(null);
  }

  useEffect(() => {
    if (selectedOption) {
      instanceRef.current.moveToIdx(1);
    } else {
      instanceRef.current.moveToIdx(0);
    }
  }, [selectedOption]);

  useEffect(() => {
    if (!instanceRef) return;
    instanceRef.current.update();
  }, [instanceRef, updateOnChange]);

  return (
    <Flex ref={sliderRef} className="keen-slider" {...props}>
      <Flex className="keen-slider__slide" w="100%" flexDir={"column"}>
        <Flex flexDir={"column"} w="100%">
          {title && (
            <Text mb="15px" fontWeight={600}>
              {title}
            </Text>
          )}
          {horarios.map((option) => (
            <Flex
              key={"k-" + option.label}
              {...hoverableProps}
              onClick={() => {
                onClickRow(horarios?.indexOf(option));
                option.onClick();
              }}
            >
              {option.row}
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Flex className="keen-slider__slide">
        <Flex flexDir="column" gridGap="10px" width="100%">
          <Flex
            gridGap="10px"
            align="center"
            borderBottom={"1px solid #0003"}
            position="relative"
            alignContent="center"
            justify="center"
            h={"40px"}
          >
            <ArrowDownIcon
              width="36px"
              height="36px"
              transform="rotate(90deg)"
              onClick={onClickBack}
              position="absolute"
              left={"15px"}
              borderRadius={"5px"}
              top="0"
              {...hoverableProps}
            />
            <Text fontWeight={600} fontSize={"22px"}>
              {selectedOption?.label}
            </Text>
          </Flex>

          <Flex flexDir={"column"}>
            {selectedOption &&
              quadras.map((quadra) => (
                <Flex
                  key={"k-" + quadra.label}
                  onClick={() => {
                    onClickRow(horarios?.indexOf(quadra));
                    quadra.onClick();
                  }}
                >
                  {quadra.row}
                </Flex>
              ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

const hoverableProps = {
  _hover: {
    bg: "gray.100",
  },
  transition: "all 0.2s",
  cursor: "pointer",
};
