import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DashboardIndexPage from "../src/pages/index";

describe("Dashboard page", () => {
  it("Should render propoerly", () => {
    render(<DashboardIndexPage />);

    const header = screen.getByRole("heading");
    const headerText = "Hello World";

    expect(header).toHaveTextContent(headerText);
  });
});
