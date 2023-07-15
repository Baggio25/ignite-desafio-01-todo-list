import { Trash } from "phosphor-react";

import styles from "./TaskItem.module.css";
import { useState } from "react";

export function TaskItem() {
  const [isChecked, setIsChecked] = useState(false);
  
  function handleToggleTaskCompletion() {
    setIsChecked(!isChecked);
  }

  console.log(isChecked);

  return (
    <div className={styles.taskItemContainer}>
      <div className={styles.taskItemLeft}>
        <div className={styles.taskItemCheckboxContainer}>
          <input 
            defaultChecked={isChecked}
            type="checkbox" 
            id="checkbox1" 
            onClick={() => handleToggleTaskCompletion()}
          />
          <label htmlFor="checkbox1"/>
        </div>
        <span className={!isChecked ? styles.taskItemLeftSpan : styles.taskItemLeftSpanUnderlined}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          corrupti harum vitae laudantium culpa corporis incidunt quis provident
          magnam mollitia!
        </span>
      </div>
      <div className={styles.taskItemRight}>
        <Trash />
      </div>
    </div>
  );
}
