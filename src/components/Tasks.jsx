import styles from "./Tasks.module.css";
import { Trash } from "phosphor-react";
import { useState } from "react";


export function TasksStack({ content, onDeleteTask }) {
  
  function handleDeleteTask(){
    onDeleteTask(content)
  }
  
  return(
    <div className={styles.stackTask}>
      <div className={styles.stack}>
        <input 
        type="checkbox"
        id="checkbox"
        />
        <p>{content}</p>
        <div>
          <button title="Deletar Task" onClick={handleDeleteTask} className={styles.trash}>
            <Trash size={18}/>
          </button>
        </div>
      </div>
    </div>
  );
}
