import styles from "./App.module.css";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TodoList } from "./components/TodoList";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <NewTask />
        <TodoList />
      </div>
    </>
  );
}
