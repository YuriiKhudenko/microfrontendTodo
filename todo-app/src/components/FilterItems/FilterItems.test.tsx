import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterItems from "./FilterItems";
import { TodoContext } from "../../context/todoContext";
import { FilterButtons, TodoContextValue } from "../../context/types";

const mockFilterTodo = jest.fn();
const mockAddTodo = jest.fn();
const mockRemoveTodo = jest.fn();
const mockToggleIsImportant = jest.fn();
const mockToggleIsCompleted = jest.fn();

const renderWithContext = (
  component: React.ReactNode,
  filter: FilterButtons
) => {
  const contextValue: TodoContextValue = {
    items: [],
    filter,
    filterTodo: mockFilterTodo,
    addTodo: mockAddTodo,
    removeTodo: mockRemoveTodo,
    toggleIsImportant: mockToggleIsImportant,
    toggleIsCompleted: mockToggleIsCompleted,
  };

  return render(
    <TodoContext.Provider value={contextValue}>
      {component}
    </TodoContext.Provider>
  );
};

describe("FilterItems component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders filter buttons", () => {
    renderWithContext(<FilterItems />, "all");

    expect(screen.getByText(/all/i)).toBeInTheDocument();
    expect(screen.getByText(/active/i)).toBeInTheDocument();
    expect(screen.getByText(/completed/i)).toBeInTheDocument();
  });

  it('calls filterTodo with "all" when All button is clicked', () => {
    renderWithContext(<FilterItems />, "all");

    fireEvent.click(screen.getByText("All"));
    expect(mockFilterTodo).toHaveBeenCalledWith("all");
  });

  it('calls filterTodo with "active" when Active button is clicked', () => {
    renderWithContext(<FilterItems />, "all");

    fireEvent.click(screen.getByText("Active"));
    expect(mockFilterTodo).toHaveBeenCalledWith("active");
  });

  it('calls filterTodo with "completed" when Completed button is clicked', () => {
    renderWithContext(<FilterItems />, "all");

    fireEvent.click(screen.getByText("Completed"));
    expect(mockFilterTodo).toHaveBeenCalledWith("completed");
  });
});
