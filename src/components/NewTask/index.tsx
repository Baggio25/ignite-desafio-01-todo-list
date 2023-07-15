import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";

interface INewTaskProps {
  newTaskValue: string;
  onNewTaskChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNewTaskSubmit: () => void;
}

export function NewTask({ newTaskValue, onNewTaskChange, onNewTaskSubmit }: INewTaskProps) {
  return (
    <form className={styles.newTaskContainer} onSubmit={onNewTaskSubmit}>
      <input
        required
        value={newTaskValue}
        onChange={onNewTaskChange}
        className={styles.newTaskInput}
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.newTaskButton}>
        <span>Criar</span>
        <PlusCircle size={20} />
      </button>
    </form>
  );
}
