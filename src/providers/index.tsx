import React from "react";
import { AppRouter } from "../routes";
import { ChakraProviderComponent } from "./ChakraProvider";
import { QueryProvider } from "./QueryProvider/QueryProvider";
import { RouterProvider } from "./RouterProvider";

export const Providers = () => {
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
