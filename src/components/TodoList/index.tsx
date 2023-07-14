import { useEffect, useState } from "react";

import TaskImage from "../../assets/task.svg";

import styles from "./TodoList.module.css";
import { TaskItem } from "../TaskItem";

export function TodoList() {
  const [tasks, setTasks] = useState<number[]>([]);

  useEffect(() => {
    //setTasks([1, 2]);
  }, []);

  return (
    <div className={styles.todoListContainer}>
      <div className={styles.todoListContainerTop}>
        <div className={styles.todoListContainerTopTaskCreated}>
          <span>Tarefas criadas </span>
          <p className={styles.todoListNumber}>0</p>
        </div>
        <div className={styles.todoListContainerTopTaskFinished}>
          <span>Tarefas concluídas </span>
          <p className={styles.todoListNumber}>0</p>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className={styles.todoListContainerBottom}>
          <img src={TaskImage} />
          <span>Você ainda não tem tarefas cadastradas</span>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        <div className={styles.todoListContainerTasks}>
          {tasks.map((index) => (
            <TaskItem key={index}/>
          ))}
        </div>
      )}
    </div>
  );
}
