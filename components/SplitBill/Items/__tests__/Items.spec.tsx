import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Items from "..";

describe("Items component", () => {
  test("renders with an empty list", () => {
    const items: string[] = [];
    const setItems = jest.fn();
    const addItem = jest.fn();
    const removeItem = jest.fn();
    const reset = jest.fn();

    render(
      <Items
        items={items}
        setItems={setItems}
        addItem={addItem}
        removeItem={removeItem}
        reset={reset}
      />
    );

    expect(screen.queryByLabelText(/item-0/i)).toBeDefined();
    expect(screen.queryByLabelText(/item-1/i)).toBeDefined();
    expect(screen.queryByLabelText(/item-2/i)).toBeDefined();
  });

  test("renders with items and allows adding new items", () => {
    const items = ["10", "20"];
    const setItems = jest.fn();
    const addItem = jest.fn();
    const removeItem = jest.fn();
    const reset = jest.fn();

    render(
      <Items
        items={items}
        setItems={setItems}
        addItem={addItem}
        removeItem={removeItem}
        reset={reset}
      />
    );

    expect(screen.getByLabelText(/item-0/i)).toHaveValue(10);
    expect(screen.getByLabelText(/item-1/i)).toHaveValue(20);

    fireEvent.click(screen.getByRole("button", { name: "add-1" }));

    expect(addItem).toHaveBeenCalled();
  });
});
