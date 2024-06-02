import { ReactNode } from "react";
import styles from "./TodoListItem.module.css";
import Button from "../../ui/Button/Button";
import { useTodoContext } from "../../context/todoContext";

type TodoListItemProps = {
  children: ReactNode;
  isImportant: boolean;
  isCompleted: boolean;
  id: number;
};

const TodoListItem = ({
  children,
  id,
  isImportant,
  isCompleted,
}: TodoListItemProps) => {
  const { removeTodo, toggleIsImportant, toggleIsCompleted } = useTodoContext();

  const onToggleDone = (id: number) => {
    toggleIsCompleted(id);
  };
  const onToggleImportant = (id: number) => {
    toggleIsImportant(id);
  };

  const onDelete = (id: number) => {
    removeTodo(id);
  };

  const getClassNames = () => {
    const classes = [styles.todoListItemLabel];
    if (isImportant) classes.push(styles.important);
    if (isCompleted) classes.push(styles.completed);
    return classes.join(" ");
  };

  return (
    <span className={styles.todoListItem}>
      <span className={getClassNames()} onClick={() => onToggleDone(id)}>
        {children}
      </span>

      <div className={styles.actionWrapper}>
        <Button onClick={() => onDelete(id)} styleClass="danger small">
          <i className="fa fa-trash-o"></i>
        </Button>
        <Button
          onClick={() => onToggleImportant(id)}
          styleClass="success small listBtn"
        >
          <i className="fa fa-exclamation"></i>
        </Button>
      </div>
    </span>
  );
};

export default TodoListItem;
