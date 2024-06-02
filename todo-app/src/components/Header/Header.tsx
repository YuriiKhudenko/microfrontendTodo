import { useMemo } from "react";
import { useTodoContext } from "../../context/todoContext";
import styles from "./Header.module.css";

const Header = () => {
  const { items } = useTodoContext();

  const doneCount = useMemo(() => {
    return items.filter((item) => item.isCompleted).length;
  }, [items]);

  const toDoCount = items.length - doneCount;

  return (
    <div className={styles.todoHeader}>
      <h1>Todo List</h1>
      <h2>
        {toDoCount} more to do, {doneCount} done
      </h2>
    </div>
  );
};

export default Header;
