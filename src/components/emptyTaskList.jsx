import { ClipboardText } from "phosphor-react";
import styles from "./Task.module.css";

export function EmptyTaskList() {
  return (
    <div className={styles.emptyTaskList}>
      <ClipboardText size={56} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}