/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a header", () => {
    render(<Home />);

    const header = screen.getByRole("heading", {
      name: /Testing with jest./i
    });

    expect(header).toBeInTheDocument();
  });
});
