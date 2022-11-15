import { describe, expect, it } from "vitest";
import { render, screen } from "tests/test-utils";
import React from "react";
import { SinglePart } from "./SinglePart";

const singlePartMock = {
    name: "Harry Potter Figure",
    partId: "123ffa",
    imgUrl: "https://cdn.rebrickable.com/media/sets/fig-012684/108439.jpg",
};

describe("SinglePart", () => {
    it("should display name and partId", () => {
        render(<SinglePart {...singlePartMock} />);
        expect(screen.getByText("Harry Potter Figure")).toBeDefined();
        expect(screen.getByText("123ffa")).toBeDefined();
    });
});
