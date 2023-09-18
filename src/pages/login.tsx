import React, { useState } from "react";
import { Flex, Image, Center } from "@chakra-ui/react";

const Login: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -350, y: 0 });
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;

    const handleMouseMove = (e: MouseEvent) => {
      if (dragging) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
        setPosition({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <Center h="100vh">
      <Flex
        w="462px"
        h="462px"
        borderRightWidth={1}
        onMouseDown={handleMouseDown}
        style={{
          cursor: dragging ? "grabbing" : "grab",
          position: "relative",
          left: position.x + "px",
          top: position.y + "px",
        }}
      >
        <Image
          w="100%"
          h="100%"
          src="https://bit.ly/dan-abramov"
          alt="Login"
        />
      </Flex>
    </Center>
  );
};

export default Login;
