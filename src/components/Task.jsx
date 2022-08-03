import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import { EmptyTaskList } from "./emptyTaskList";

import styles from "./Task.module.css";
import { TasksStack } from "./Tasks";

export function Task() {
  const [tasks, setTasks] = useState([]);

  const [newTasksText, setNewTasksText] = useState("");

  function handleCreateNewTask() {
    event.preventDefault();

    const newTaskText = event.target.tasks.value;

    setTasks([...tasks, newTasksText]);
    setNewTasksText("");
  }

  function handleNewTaskChange() {
    setNewTasksText(event.target.value);
  }

  function deleteTask(tasksToDelete) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== tasksToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  function totalTasks(tasks) {
    return tasks + 1;
  }
  
  const resultado = tasks.reduce(totalTasks, 0);

  return (
    <article>
      <form onSubmit={handleCreateNewTask} className={styles.task}>
        <input
          type="text"
          name="tasks"
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          value={newTasksText}
        />
        <button type="submit" title="Criar Task" className={styles.button}>
          Criar <PlusCircle size={22} />
        </button>
      </form>

      <div className={styles.counts}>
        <div className={styles.infoCounts}>
          <p>
            Tarefas Criadas <a>{resultado}</a>
          </p>
        </div>
        <div className={styles.infoCounts}>
          <p>
            Tarefas Concluídas{" "}
            <a>
              {resultado} de {resultado}
            </a>
          </p>
        </div>
      </div>

      <div>
        {tasks.map((task) => {
          return (
            <TasksStack content={task} key={task} onDeleteTask={deleteTask} />
          );
        })}
        
      </div>
    </article>
  );
}
