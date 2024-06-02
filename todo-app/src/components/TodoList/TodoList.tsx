import { useMemo } from "react";
import { useTodoContext } from "../../context/todoContext";
import TodoListItem from "../TodoListItem/TodoListItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const { items, filter } = useTodoContext();

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      switch (filter) {
        case "completed":
          return item.isCompleted;
        case "active":
          return !item.isCompleted;
        default:
          return true;
      }
    });
  }, [items, filter]);

  return (
    <ul className={styles.todoList}>
      {filteredItems.map((item) => (
        <li key={item.id} className={styles.listGroupItem}>
          <TodoListItem
            isCompleted={item.isCompleted}
            isImportant={item.isImportant}
            id={item.id}
          >
            {item.label}
          </TodoListItem>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
