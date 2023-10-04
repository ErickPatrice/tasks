const Task = ({ task, onClickDone, onClickDelete }) => {
  return (
    <section className="d-flex justify-content-between my-3 ">
      <h2 className={task.done ? "text-decoration-line-through" : ""}>{task.title}</h2>
      <div className="d-flex gap-3">
        <button
          onClick={() => { onClickDone(task.id) }}
          className={"btn btn-success"} >{task.done ? "Invalidé" : "Validé"}</button>
        <button
          onClick={() => { onClickDelete(task.id) }}
          className="btn btn-danger">Supprimer</button>
      </div>

    </section>
  );
}

export default Task;