import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../pages";
let count = 0;

describe("Home componet", () => {
  it("shovld render count", () => {
    const { getByText } = render(<Home />);
    expect(getByText(count)).toBeInTheDocument();
  });
  it("shovld be able to add number count", () => {
    const { getByText, debug } = render(<Home />);

    const addButton = getByText("+");

    userEvent.click(addButton);

    expect(getByText(count + 1)).toBeInTheDocument();
  });
});
