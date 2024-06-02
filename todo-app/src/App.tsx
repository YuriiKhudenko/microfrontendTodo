import TodoContextProvider from "./context/todoContext";

import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import AddItem from "./components/AddItem/AddItem";
import FilterItems from "./components/FilterItems/FilterItems";

import styles from "./App.module.css";

function App() {
  return (
    <TodoContextProvider>
      <main className={styles.todoApp}>
        <Header />
        <FilterItems />
        <AddItem />
        <TodoList />
      </main>
    </TodoContextProvider>
  );
}

export default App;
