import { render, screen } from "@testing-library/react";
import Summary from "..";
import "@testing-library/jest-dom";

const ITEMS = ["1000", "500"];

test("loads and display Items component", () => {
  // arrange
  render(<Summary items={ITEMS} />);

  // assert
  expect(screen.getByText(/Subtotal/i)).toHaveTextContent("Subtotal: 1500.00");
});
