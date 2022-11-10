import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import "@fontsource/roboto";
import "@fontsource/oswald";

type Props = {
	children: React.ReactNode;
};
export const theme = extendTheme({
	colors: {
		bg: "#1F2137",
		orange: "#FF6900",
	},
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
export const ChakraProviderComponent = ({ children }: Props) => {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
