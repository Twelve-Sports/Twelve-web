// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { theme } from "../styles/ChakraTheme";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
