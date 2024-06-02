import { FormEvent, useRef } from "react";
import Input from "../../ui/Input/Input";
import { useTodoContext } from "../../context/todoContext";
import Button from "../../ui/Button/Button";

import styles from "./AddItem.module.css";

const AddItem = () => {
  const addRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodoContext();

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredTodo = addRef.current!.value;

    if (enteredTodo.trim()) {
      addTodo(enteredTodo);
    }
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={onFormSubmit} className={styles.formAdd}>
      <Input label="What needs to be done?" ref={addRef} />
      <Button styleClass="secondary small">Add</Button>
    </form>
  );
};

export default AddItem;
