// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
