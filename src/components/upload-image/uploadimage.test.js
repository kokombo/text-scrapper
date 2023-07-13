import { render, screen } from "@testing-library/react";
import UploadImage from "./UploadImage";

describe("UploadImage", () => {
  beforeEach(() => {
    render(<UploadImage />);
  });

  test("renders correctly", () => {
    const titleEl = screen.getByRole("heading", {
      level: 2,
    });
    expect(titleEl).toBeInTheDocument();

    // const inputEl = screen.getByRole("textbox", {
    //   name: "file",
    // });
    // expect(inputEl).toBeInTheDocument();
  });
});
