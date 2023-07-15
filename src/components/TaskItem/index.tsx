import { Trash } from "phosphor-react";

import styles from "./TaskItem.module.css";
import { Task } from "../../@types/task";

interface ITaskITem {
  task: Task;
  onToggleTaskCompletion: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskItem({ task, onToggleTaskCompletion, onDeleteTask }: ITaskITem) {
  return (
    <div className={styles.taskItemContainer}>
      <div className={styles.taskItemLeft}>
        <div className={styles.taskItemCheckboxContainer}>
          <input
            defaultChecked={task.isComplete}
            type="checkbox"
            id={task.id}
            onClick={() => onToggleTaskCompletion(task.id)}
          />
          <label htmlFor={task.id} />
        </div>
        <span
          className={
            !task.isComplete
              ? styles.taskItemLeftSpan
              : styles.taskItemLeftSpanUnderlined
          }
        >
          {task.title}
        </span>
      </div>
      <div 
        className={styles.taskItemRight}
        onClick={() => onDeleteTask(task.id)}
      >
        <Trash />
      </div>
    </div>
  );
}
