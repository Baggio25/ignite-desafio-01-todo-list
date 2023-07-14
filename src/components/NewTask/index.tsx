import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";

export function NewTask() {
  return (
    <form className={styles.newTaskContainer}>
      <input
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
