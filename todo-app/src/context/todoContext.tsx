import { createContext, useContext, useReducer } from "react";
import {
  Action,
  TodoContextProviderProps,
  TodoContextValue,
  TodoState,
} from "./types";
import {
  toggleProperty,
  saveToLocalStorage,
  loadFromLocalStorage,
} from "./helpers";

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_IS_IMPORTANT_TODO = "TOGGLE_IS_IMPORTANT_TODO";
const TOGGLE_IS_COMPLETED_TODO = "TOGGLE_IS_COMPLETED_TODO";
const FILTER_TODO = "FILTER_TODO";

export const TodoContext = createContext<TodoContextValue | null>(null);

const initialState: TodoState = loadFromLocalStorage<TodoState>("todoState", {
  items: [
    {
      id: 1,
      label: "Do home assignment",
      isImportant: true,
      isCompleted: true,
    },
    { id: 2, label: "Eat apple", isImportant: false, isCompleted: false },
    {
      id: 3,
      label: "Have a walk",
      isImportant: true,
      isCompleted: false,
    },
  ],
  filter: "all",
});

const todoReducer = (state: TodoState, action: Action): TodoState => {
  let newState: TodoState;

  switch (action.type) {
    case ADD_TODO:
      newState = {
        ...state,
        items: [
          ...state.items,
          {
            isCompleted: false,
            isImportant: false,
            label: action.payload,
            id: Date.now(),
          },
        ],
      };
      break;
    case REMOVE_TODO:
      newState = {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
      break;
    case TOGGLE_IS_IMPORTANT_TODO:
      newState = {
        ...state,
        items: toggleProperty(state.items, action.payload, "isImportant"),
      };
      break;
    case TOGGLE_IS_COMPLETED_TODO:
      newState = {
        ...state,
        items: toggleProperty(state.items, action.payload, "isCompleted"),
      };
      break;
    case FILTER_TODO:
      newState = {
        ...state,
        filter: action.payload,
      };
      break;
    default:
      newState = state;
  }

  saveToLocalStorage("todoState", newState);
  return newState;
};

const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const ctx: TodoContextValue = {
    ...state,
    addTodo: (label) => {
      dispatch({ type: ADD_TODO, payload: label });
    },
    removeTodo: (id) => {
      dispatch({ type: REMOVE_TODO, payload: id });
    },
    toggleIsImportant: (id) => {
      dispatch({ type: TOGGLE_IS_IMPORTANT_TODO, payload: id });
    },
    toggleIsCompleted(id) {
      dispatch({ type: TOGGLE_IS_COMPLETED_TODO, payload: id });
    },
    filterTodo(name) {
      dispatch({ type: FILTER_TODO, payload: name });
    },
  };

  return <TodoContext.Provider value={ctx}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("TodoContext is using outside the TodoContext.Provider");
  }

  if (context === null) {
    throw new Error("Something wrong with the Context!");
  }

  return context;
};

export default TodoContextProvider;
