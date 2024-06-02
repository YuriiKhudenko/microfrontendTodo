import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import TodoContextProvider from "../../context/todoContext";
import Header from "./Header";
import "@testing-library/jest-dom";
import { FilterButtons, TodoContextValue } from "../../context/types";

interface ProviderProps {
  value: TodoContextValue;
}

const renderWithContext = (
  ui: ReactElement,
  {
    providerProps,
    ...renderOptions
  }: { providerProps: ProviderProps } & RenderOptions
) => {
  return render(
    <TodoContextProvider {...providerProps}>{ui}</TodoContextProvider>,
    renderOptions
  );
};

describe("Header component", () => {
  const getDefaultProviderProps = (): ProviderProps => ({
    value: {
      items: [],
      addTodo: jest.fn(),
      removeTodo: jest.fn(),
      toggleIsImportant: jest.fn(),
      toggleIsCompleted: jest.fn(),
      filterTodo: jest.fn(),
      filter: "all" as FilterButtons,
    },
  });

  test("renders without crashing", () => {
    const providerProps = getDefaultProviderProps();
    const { getByText } = renderWithContext(<Header />, { providerProps });
    expect(getByText("Todo List")).toBeInTheDocument();
  });

  test("displays the correct counts of done and to-do items", () => {
    const providerProps = getDefaultProviderProps();
    providerProps.value.items = [
      { id: 1, label: "Task 1", isImportant: false, isCompleted: true },
      { id: 2, label: "Task 2", isImportant: true, isCompleted: false },
    ];

    const { getByText } = renderWithContext(<Header />, { providerProps });

    expect(getByText(/2 more to do, 1 done/)).toBeInTheDocument();
  });
});
