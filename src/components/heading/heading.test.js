import { render, screen } from "@testing-library/react";
import Heading from "./Heading";

describe("Heading", () => {
  beforeEach(() => {
    render(<Heading />);
  });

  test("renders correctly", () => {
    const headingEl = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingEl).toBeInTheDocument();
  });
});
