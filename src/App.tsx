import { useState } from "react";
import { v4 as uuid } from "uuid";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TodoList } from "./components/TodoList";

import styles from "./App.module.css";

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
