const FormAddTask = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="d-flex gap-2 w-50 align-items-center">
      <label htmlFor="title-form-add-task" className="form-label ">Titre : </label>
      <input type="text" id="title-form-add-task" className="form-control w-50" />
      <button className="btn btn-success" type="submit">Créer une nouvelle tâche</button>
    </form>
  );
}

export default FormAddTask;