import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";

type Props = {
	children: React.ReactNode;
};

const ChakraProviderComponent = ({ children }: Props) => {
	const theme = extendTheme({
		fonts: {
			heading: `'Oswald', sans-serif`,
			body: `'Roboto', sans-serif`,
		},
		styles: {
			global: () => ({
				body: {
					bg: "#1F2137",
				},
			}),
		},
	});
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ChakraProviderComponent;
