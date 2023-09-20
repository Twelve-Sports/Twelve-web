import React from "react";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

const IndexPage = () => (
	<Flex height="100vh" alignItems="center" justifyContent="center" flexDir="column" gap="10px">
		<Text>Hello Quadra Onze</Text>
		<Text mt="10px">Brand</Text>
		<Flex>
			<Box w="30px" h="30px" bg="brand.50"/>
			<Box w="30px" h="30px" bg="brand.100"/>
			<Box w="30px" h="30px" bg="brand.200"/>
			<Box w="30px" h="30px" bg="brand.300"/>
			<Box w="30px" h="30px" bg="brand.400"/>
			<Box w="30px" h="30px" bg="brand.500"/>
			<Box w="30px" h="30px" bg="brand.600"/>
			<Box w="30px" h="30px" bg="brand.700"/>
			<Box w="30px" h="30px" bg="brand.800"/>
			<Box w="30px" h="30px" bg="brand.900"/>
		</Flex>
		<Button colorScheme="brand">Button</Button>

		<Text mt="10px">Success:</Text>
		<Flex>
			<Box w="30px" h="30px" bg="success.50"/>
			<Box w="30px" h="30px" bg="success.100"/>
			<Box w="30px" h="30px" bg="success.200"/>
			<Box w="30px" h="30px" bg="success.300"/>
			<Box w="30px" h="30px" bg="success.400"/>
			<Box w="30px" h="30px" bg="success.500"/>
			<Box w="30px" h="30px" bg="success.600"/>
			<Box w="30px" h="30px" bg="success.700"/>
			<Box w="30px" h="30px" bg="success.800"/>
			<Box w="30px" h="30px" bg="success.900"/>
		</Flex>
		<Button colorScheme="success">Button</Button>

		<Text mt="10px">Danger:</Text>
		<Flex>
			<Box w="30px" h="30px" bg="danger.50"/>
			<Box w="30px" h="30px" bg="danger.100"/>
			<Box w="30px" h="30px" bg="danger.200"/>
			<Box w="30px" h="30px" bg="danger.300"/>
			<Box w="30px" h="30px" bg="danger.400"/>
			<Box w="30px" h="30px" bg="danger.500"/>
			<Box w="30px" h="30px" bg="danger.600"/>
			<Box w="30px" h="30px" bg="danger.700"/>
			<Box w="30px" h="30px" bg="danger.800"/>
			<Box w="30px" h="30px" bg="danger.900"/>
		</Flex>
		<Button colorScheme="danger">Button</Button>

		<Text mt="10px">Gray:</Text>
		<Flex>
			<Box w="30px" h="30px" bg="gray.50"/>
			<Box w="30px" h="30px" bg="gray.100"/>
			<Box w="30px" h="30px" bg="gray.200"/>
			<Box w="30px" h="30px" bg="gray.300"/>
			<Box w="30px" h="30px" bg="gray.400"/>
			<Box w="30px" h="30px" bg="gray.500"/>
			<Box w="30px" h="30px" bg="gray.600"/>
			<Box w="30px" h="30px" bg="gray.700"/>
			<Box w="30px" h="30px" bg="gray.800"/>
			<Box w="30px" h="30px" bg="gray.900"/>
		</Flex>
		<Button colorScheme="gray">Button</Button>
	
	</Flex>
);

export default IndexPage;
