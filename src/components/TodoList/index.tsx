import { useEffect, useState } from "react";

import TaskImage from "../../assets/task.svg";

import styles from "./TodoList.module.css";
import { TaskItem } from "../TaskItem";
import { Task } from "../../@types/task";

interface ITodoList {
  tasks: Task[];
  onToggleTaskCompletion: (id: string) => void;
  onDeleteTask: (id: string) => void;
  completeTasksNumber: number;
}

export function TodoList({
  tasks,
  onToggleTaskCompletion,
  onDeleteTask,
  completeTasksNumber,
}: ITodoList) {
  const [tasksCompleted, setTasksCompleted] = useState(0);

  useEffect(() => {
    setTasksCompleted(completeTasksNumber);
  }, [completeTasksNumber]);

  return (
    <div className={styles.todoListContainer}>
      <div className={styles.todoListContainerTop}>
        <div className={styles.todoListContainerTopTaskCreated}>
          <span>Tarefas criadas </span>
          <p className={styles.todoListNumber}>{tasks.length}</p>
        </div>
        <div className={styles.todoListContainerTopTaskFinished}>
          <span>Tarefas concluídas </span>
          {tasksCompleted === 0 ? (
            <p className={styles.todoListNumber}>0</p>
          ) : (
            <p className={styles.todoListNumberNoEmpty}>
              {tasksCompleted} de {tasks.length}
            </p>
          )}
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
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleTaskCompletion={() => onToggleTaskCompletion(task.id)}
              onDeleteTask={() => onDeleteTask(task.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
