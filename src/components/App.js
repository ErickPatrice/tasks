import { useEffect, useState } from "react";
import Task from "./Task";
import JsonServer from "../services/JsonServer";
import FormAddTask from "./FormAddTask";
import EmailForm from "./EmailForm";


function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  // UseEffect avec un tableau de dépendances vide sera exécuté une seule fois après le premier render
  useEffect(() => {
    loadRemoteTasks();
    try {
      loadRemoteTasks()
    } catch (error) {
      setError(`Erreur attrapée dans loadTasks` + error);
      console.error(`Erreur attrapée dans loadTasks` + error);
    }
  }, []);

  async function loadRemoteTasks() {
    const tasks_loaded = await JsonServer.loadTasks();
    setTasks(tasks_loaded);

  }
  function handleClickDone(task_id) {
    console.log(`Dans handleClickDone`, task_id);
    const copy_tasks = [...tasks];
    copy_tasks.forEach((task) => {
      if (task.id === task_id) task.done = !task.done;
    })
    setTasks(tasks => copy_tasks);
  }
  async function handleClickDelete(task_id) {
    console.log(`Dans handleClickDelete`, task_id);
    try {
      await JsonServer.deleteRemoteTask(task_id);
      const filtered_tasks = tasks.filter((task) => (task.id !== task_id));
      setTasks(tasks => filtered_tasks);
    } catch (error) {
      console.error(`Erreur attrapée handleClickDelete`);
      setError(`Erreur attrapée dans handleClickDelete` + error);
      loadRemoteTasks();
    }
  }

  return (
    <div className="App container">
      <h1>Gestion des tâches</h1>
      <FormAddTask />
      {error && (<h2 className="text-danger">{error}</h2>)}
      {/* Création des composants Task à partir du state tasks */}
      {tasks.map((task) => <Task key={task.id}
        task={task}
        onClickDone={handleClickDone}
        onClickDelete={handleClickDelete}

      />)}
      <EmailForm/>
    </div>
  );
}

export default App;
