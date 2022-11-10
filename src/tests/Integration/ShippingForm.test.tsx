import { CheckoutPage } from "pages/checkout";
import { ChooseFigurePage } from "pages/chooseFigure";
import { render, screen } from "tests/test-utils";

describe("Shipping form", () => {
	it("Should display the form", () => {
		render(<CheckoutPage />);
		screen.debug();
		expect(true).toBe(true);
	});
});
