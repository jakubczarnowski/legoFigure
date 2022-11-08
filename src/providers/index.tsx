import React from "react";
import { AppRouter } from "../routes";
import { ChakraProviderComponent } from "./ChakraProvider";
import { QueryProvider } from "./QueryProvider/QueryProvider";
import { RouterProvider } from "./RouterProvider";

type Props = {};

export const Providers = (props: Props) => {
	return (
		<ChakraProviderComponent>
			<RouterProvider>
				<QueryProvider>
					<AppRouter />
				</QueryProvider>
			</RouterProvider>
		</ChakraProviderComponent>
	);
};
