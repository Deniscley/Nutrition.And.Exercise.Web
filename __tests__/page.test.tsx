import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../src/app/page";

describe("Dashboard page", () => {
  it("Should render propoerly", () => {
    render(<Home />);

    const header = screen.getByRole("heading");
    const headerText = "Hello World";

    expect(header).toHaveTextContent(headerText);
  });
});
