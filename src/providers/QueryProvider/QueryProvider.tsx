import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

type Props = {
	children: React.ReactNode;
};

const queryClient = new QueryClient();

export const QueryProvider = ({ children }: Props) => (
	<QueryClientProvider client={queryClient}>
		{children}
		<ReactQueryDevtools initialIsOpen />
	</QueryClientProvider>
);
