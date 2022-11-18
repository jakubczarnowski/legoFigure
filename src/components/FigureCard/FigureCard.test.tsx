import { describe, expect, it, vi } from "vitest";
// import { render, screen } from "@testing-library/react";
import { FigureCard } from "./FigureCard";
import { render, screen } from "tests/test-utils";

const figureCardMock = {
    figureId: "fig-008941",
    name: "Harry Potter Figure",
    imgUrl: "https://cdn.rebrickable.com/media/sets/fig-012684/108439.jpg",
    isSelected: true,
    onClick: vi.fn(),
    openModal: vi.fn(),
};

describe("FigureCard", () => {
    it("should show name ", () => {
        render(<FigureCard {...figureCardMock} />);
        expect(screen.getByText("Harry Potter Figure")).toBeDefined();
    });
});
