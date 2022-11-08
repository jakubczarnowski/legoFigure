import React from "react";
import AppRouter from "../routes";
import ChakraProviderComponent from "./ChakraProvider";
import RouterProvider from "./RouterProvider";

type Props = {};

const Providers = (props: Props) => {
	return (
		<ChakraProviderComponent>
			<RouterProvider>
				<AppRouter />
			</RouterProvider>
		</ChakraProviderComponent>
	);
};

export default Providers;
