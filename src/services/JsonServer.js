export default class JsonServer{
  static url = 'http://localhost:3001/tasks';
  static async loadTasks() {
    return fetch(JsonServer.url)
    .then(response => {
      console.log(`response.status`, response.status);
      return response.json();  
    })
    .then(tasks => {
      console.log(`tasks : `, tasks);
      return tasks;
    })
  }
  static async deleteRemoteTask(task_id) {
    return fetch(`${JsonServer.url}/${task_id}`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE"
    })
    .then(function (res) { 
      console.log(`res.status`, res.status);
      if(res.status !== 200) throw new Error("Erreur dans deleteRemoteTask");
      return res.json();
     })
    .then(function (data) { console.log("data après delete", data) })
  }
}