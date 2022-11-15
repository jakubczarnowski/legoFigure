import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClientConfig, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "jotai";
import { ReactNode, ReactElement } from "react";
import { MemoryRouter } from "react-router";
import { selectedFigureIdAtom } from "shared";
import { vi } from "vitest";

export const mockMatchMedia = () =>
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: vi.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: vi.fn(), // deprecated
            removeListener: vi.fn(), // deprecated
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        })),
    });

const TestQueryProvider = ({ children, config }: { children: ReactNode; config?: QueryClientConfig }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
        ...config,
    });
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

const TestProviders = ({ children }: { children: ReactNode }) => (
    <TestQueryProvider>
        <ChakraProvider theme={theme}>
            <Provider initialValues={[[selectedFigureIdAtom, "fig-008941"]]}>
                <MemoryRouter>{children}</MemoryRouter>
            </Provider>
        </ChakraProvider>
    </TestQueryProvider>
);

const customRender = (ui: ReactElement, options?: RenderOptions) =>
    render(ui, { wrapper: options?.wrapper ?? TestProviders, ...options });

export * from "@testing-library/react";
// override render method
export { customRender as render, TestQueryProvider, TestProviders };
