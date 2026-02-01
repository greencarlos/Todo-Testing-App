import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, waitFor } from "@testing-library/react";
import configureStore from "redux-mock-store";
import ViewExercises from "../comps/ViewExercises";
import DeleteExercise from "../comps/DeleteExercise";
import { deleteExercise } from "../comps/exercisesSlice";

const mockStore = configureStore([]);

describe("View Exercises Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      exercises: {
        exercises: [
          { id: "1", type: "Running", duration: "30", calories: "300" },
          { id: "2", type: "Cycling", duration: "45", calories: "450" },
        ],
      },
    });
  });

  test("render exercise list", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ViewExercises />
      </Provider>
    );

    expect(getByText(/Running - 30 minutes - 300 kcal/i)).toBeInTheDocument();
    expect(getByText(/Cycling - 45 minutes - 450 kcal/i)).toBeInTheDocument();
  });

  describe("Delete Exercise Component", () => {
    it("dispatches deleteExercise action with the correct id", () => {
      store.dispatch = jest.fn();

      const { getByText } = render(
        <Provider store={store}>
          <DeleteExercise id="1" />
        </Provider>
      );

      fireEvent.click(getByText(/delete/i));
      expect(store.dispatch).toHaveBeenCalledWith(deleteExercise("1"));
    });
  });

  test("View Exercises react component matches snapshot", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <ViewExercises />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
