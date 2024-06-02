import { useTodoContext } from "../../context/todoContext";
import { FilterButtons } from "../../context/types";
import Button from "../../ui/Button/Button";

import styles from "./FilterItems.module.css";

type filterButtonsType = {
  name: FilterButtons;
  label: string;
};

const filterButtons: filterButtonsType[] = [
  { name: "all", label: "All" },
  { name: "active", label: "Active" },
  { name: "completed", label: "Completed" },
];

const FilterItems = () => {
  const { filterTodo, filter } = useTodoContext();

  const onFilterChange = (name: FilterButtons) => {
    filterTodo(name);
  };

  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;
    const classNames = isActive ? "active" : "secondary";

    return (
      <Button
        key={name}
        styleClass={classNames}
        onClick={() => onFilterChange(name)}
      >
        {label}
      </Button>
    );
  });

  return <div className={styles.actionWrapper}>{buttons}</div>;
};

export default FilterItems;
