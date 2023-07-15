import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TodoList } from "./components/TodoList";
import { Task } from "./@types/task";

import styles from "./App.module.css";

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskInput, setNewTaskInput] = useState("");

  const completedTasks = tasks.filter((task) => {
    return task.isComplete !== false;
  });

  console.log("App --> Completed :" + completedTasks.length);

  useEffect(() => {
    setTasks([
      {
        id: uuid(),
        title: "Estudar ReactJS",
        isComplete: false,
      },
      {
        id: uuid(),
        title: "Estudar Java Spring Rest",
        isComplete: false,
      },
      {
        id: uuid(),
        title: "Tomar água",
        isComplete: true,
      },
    ]);

  }, []);

  function handleNewTaskChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTaskInput(e.target.value);
  }

  function handleNewTaskSubmit() {
    event?.preventDefault();

    setTasks([
      ...tasks,
      {
        id: uuid(),
        title: newTaskInput,
        isComplete: false,
      },
    ]);

    setNewTaskInput("");
  }

  function handleToggleTaskCompletion(id: string) {
    const taskList = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }

      return task;
    });

    setTasks(taskList);
    console.log(taskList);
  }

  function handleDeleteTask(id: string) {
    const taskList = tasks.filter((task) => task.id !== id);
    setTasks(taskList);
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <NewTask
          newTaskValue={newTaskInput}
          onNewTaskChange={handleNewTaskChange}
          onNewTaskSubmit={handleNewTaskSubmit}
        />

        <TodoList
          tasks={tasks}
          onToggleTaskCompletion={handleToggleTaskCompletion}
          onDeleteTask={handleDeleteTask}
          completeTasksNumber={completedTasks.length}
        />
      </div>
    </>
  );
}
