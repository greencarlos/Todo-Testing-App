import React from "react";
import RecipeApp from "../comps/RecipeApp";
import { render, fireEvent } from "@testing-library/react";

describe("Testing recipe app component", () => {
  test("renders recipes list", () => {
    const { getByText } = render(<RecipeApp />);

    expect(getByText(/Spaghetti Carbonara/i)).toBeInTheDocument();
    expect(getByText(/Hawaiian Pizza/i)).toBeInTheDocument();
  });

  test("updates the list based on search query", () => {
    const { getByPlaceholderText, queryByText } = render(<RecipeApp />);
    fireEvent.change(getByPlaceholderText(/Search recipes.../i), {
      target: { value: "chicken" },
    });

    expect(queryByText(/Cheese Pizza/i)).toBeInTheDocument();
    expect(queryByText(/Pepperoni Pizza/i)).toBeInTheDocument();
    expect(queryByText(/Chicken Parmesan Pasta/i)).not.toBeInTheDocument();
  });

  test("is case-insensitive in search", () => {
    const { getByPlaceholderText, queryByText } = render(<RecipeApp />);
    fireEvent.change(getByPlaceholderText(/Search recipes.../i), {
      target: { value: "ChIcKeN" },
    });

    expect(queryByText(/Vegetarian Pizza/i)).toBeInTheDocument();
    expect(queryByText(/Chicken Tikka Masala/i)).not.toBeInTheDocument();
  });

  test("Recipe component matches snapshot", () => {
    const { asFragment } = render(<RecipeApp />);
    expect(asFragment()).toMatchSnapshot();
  });
});
