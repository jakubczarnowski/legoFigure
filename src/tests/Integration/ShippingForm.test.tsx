import { CheckoutPage } from "pages/checkout";
import { ChooseFigurePage } from "pages/chooseFigure";
import { ShippingData } from "shared/types";
import { fireEvent, render, screen } from "tests/test-utils";
import { vi } from "vitest";

describe("Shipping form", () => {
	beforeEach(() => {
		render(<CheckoutPage />);
	});
	it("should display required error when value is invalid", async () => {
		fireEvent.submit(screen.getByRole("button"));
		screen.debug();
		screen.findAllByRole("");
	});
	it("Should display matching error when email is invalid", async () => {
		fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
			target: {
				value: "test",
			},
		});

		fireEvent.submit(screen.getByRole("button"));
		expect(await screen.findAllByRole("alert")).toBeDefined();
		expect(screen.getByRole("textbox", { name: /email/i })).toHaveValue("test");
	});
});
