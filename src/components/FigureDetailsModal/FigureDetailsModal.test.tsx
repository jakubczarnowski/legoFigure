import { describe, expect, it, vi } from "vitest";
import { FigureDetailsModal } from "./FigureDetailsModal";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { render, screen } from "tests/test-utils";

const figureDetailsModalMock = {
    isOpen: true,
    setNum: "fig-008941",
    handleClose: vi.fn(),
    name: "Harry Potter Figure",
    numParts: 4,
    setImgUrl: "https://cdn.rebrickable.com/media/sets/fig-012684/108439.jpg",
    setUrl: "https://rebrickable.com/sets/fig-012684-1/harry-potter-figure/",
};

describe("FigureDetailsModal", () => {
    it("should show figureId and name ", () => {
        const { handleClose, ...rest } = figureDetailsModalMock;
        render(
            <ChakraProvider theme={theme}>
                <FigureDetailsModal {...rest} onClose={handleClose} />
            </ChakraProvider>
        );
        expect(screen.getByText("Harry Potter Figure")).toBeDefined();
        expect(screen.getByRole("banner").textContent).toMatch("Set number - (fig-008941)");
    });
});
