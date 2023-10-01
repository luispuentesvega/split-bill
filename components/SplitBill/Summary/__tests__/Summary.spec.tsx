import { render, screen } from "@testing-library/react";
import Summary from "..";
import "@testing-library/jest-dom";

const ITEMS = ["1000", "500"];

test("loads and display Items component", () => {
  // arrange
  render(<Summary items={ITEMS} />);

  // act
  const subtotalElement = screen.getByText(/Subtotal/i);

  // assert
  expect(subtotalElement.textContent).toEqual("Subtotal: 1500.00");
});
