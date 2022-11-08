import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import "@fontsource/roboto";
import "@fontsource/oswald";

type Props = {
	children: React.ReactNode;
};

export const ChakraProviderComponent = ({ children }: Props) => {
	const theme = extendTheme({
		colors: {
			bg: "#1F2137",
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
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
