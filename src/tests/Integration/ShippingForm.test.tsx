import { useEnvironment, usePointerEvent } from "@chakra-ui/react";
import { CheckoutPage } from "pages/Checkout";
import { fireEvent, mockMatchMedia, render, screen, waitFor, waitForElementToBeRemoved } from "tests/test-utils";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Shipping form", () => {
    beforeAll(() => mockMatchMedia());
    beforeEach(async () => {
        render(<CheckoutPage />);
        await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
        await waitForElementToBeRemoved(() => screen.getByLabelText("Summary Skeleton"));
    });
    it("should render the shipping form", async () => {
        expect(screen.getByRole("heading", { name: /SHIPPING DETAILS/i })).toBeInTheDocument();
        expect(screen.getByLabelText(/Name Input/i));
        expect(screen.getByRole("textbox", { name: /surname/i }));
        expect(screen.getByRole("spinbutton", { name: /number/i })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
        expect(screen.getByLabelText(/birth/i)).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /address/i })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /city/i })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /state/i })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /zip/i })).toBeInTheDocument();
    });
    // using user event to simulate the actual user
    it("should display required error when value is invalid", async () => {
        userEvent.click(screen.getByRole("textbox", { name: /email/i }));
        userEvent.keyboard("test");
        userEvent.click(screen.getByRole("button", { name: /submit/i }));
        // should display error
        await waitFor(() => {
            expect(screen.getByText(/email is invalid/i)).toBeInTheDocument();
        });
    });
    it("Should have submit batton enabled when all fields are filled correctly", async () => {
        await waitFor(() => userEvent.type(screen.getByLabelText(/Name Input/i), "name"));
        userEvent.tab();

        await waitFor(() => userEvent.type(screen.getByRole("textbox", { name: /surname/i }), "surname"));
        userEvent.tab();

        await waitFor(() => userEvent.type(screen.getByRole("spinbutton", { name: /number/i }), "123456789"));
        userEvent.tab();

        await waitFor(() => userEvent.type(screen.getByRole("textbox", { name: /email/i }), "email@email.com"));
        userEvent.tab();

        await waitFor(() => userEvent.type(screen.getByRole("textbox", { name: /address/i }), "address"));
        userEvent.tab();

        await waitFor(() => userEvent.type(screen.getByRole("textbox", { name: /city/i }), "city"));
        userEvent.tab();

        await waitFor(() => userEvent.type(screen.getByRole("textbox", { name: /state/i }), "state"));
        userEvent.tab();

        await waitFor(() => userEvent.type(screen.getByRole("textbox", { name: /zip/i }), "zip"));
        userEvent.tab();

        const button = screen.getByRole("button", { name: /submit/i });
        expect(button).toBeEnabled();
    });
});
