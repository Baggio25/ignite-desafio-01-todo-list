import { CheckCircle, Trash } from "phosphor-react";

import styles from "./TaskItem.module.css";

export function TaskItem() {
  return (
    <div className={styles.taskItemContainer}>
      <CheckCircle />
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        iure.
      </span>
      <Trash />
    </div>
  );
}
