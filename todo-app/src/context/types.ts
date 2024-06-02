import { type ReactNode } from "react";

export type TodoItem = {
  id: number;
  label: string;
  isImportant: boolean;
  isCompleted: boolean;
};

export type FilterButtons = "all" | "active" | "completed";

export type TodoState = {
  items: TodoItem[];
  filter: FilterButtons;
};

export type TodoContextProviderProps = {
  children: ReactNode;
};

type AddTodoAction = {
  type: "ADD_TODO";
  payload: string;
};

type RemoveTodoAction = {
  type: "REMOVE_TODO";
  payload: number;
};

type ToggleIsImportantTodo = {
  type: "TOGGLE_IS_IMPORTANT_TODO";
  payload: number;
};

type ToggleIsCompletedTodo = {
  type: "TOGGLE_IS_COMPLETED_TODO";
  payload: number;
};

type FilterTodo = {
  type: "FILTER_TODO";
  payload: FilterButtons;
};

export type Action =
  | AddTodoAction
  | RemoveTodoAction
  | ToggleIsImportantTodo
  | ToggleIsCompletedTodo
  | FilterTodo;

export type TodoContextValue = TodoState & {
  addTodo: (label: string) => void;
  removeTodo: (id: number) => void;
  toggleIsImportant: (id: number) => void;
  toggleIsCompleted: (id: number) => void;
  filterTodo: (name: FilterButtons) => void;
};
