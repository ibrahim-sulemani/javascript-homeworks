let tasks = [];

function addTask() {
  const taskElement = document.getElementById("addTaskInput");

  let task = {
    id: Math.round(Math.random() * 100000000),
    name: taskElement.value.trim(),
    important: false
  };

  tasks.push(task);

  document.getElementById("filterTaskInput").value = "";
  taskElement.value = "";
  loadTasks();
}

function loadTasks() {
  const filterTask = document.getElementById("filterTaskInput").value;

  let tasksHtml = "";

  for (task of tasks) {
    if (task.name.includes(filterTask)) {
      tasksHtml += createTask(task);
    }
  }

  document.getElementById("tasks").innerHTML = tasksHtml;
}

function createTask(task) {

  return `<div class="d-flex justify-content-between border p-2 text-center ${task.important?"bg-danger":""}">
            <p>${task.name}</p>
            <div class="d-flex gap-2">
                <input type="radio" id="important${task.id}" onchange="toggleImportant(${task.id})" ${task.important?"checked":""}>Mark as important
                <button class="btn btn-sm btn-warning" onclick="editTask('${task.id}')">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteTask('${task.id}')">Delete</button>
            </div>
        </div>`;
}

function deleteTask(id) {
  let index = tasks.findIndex((task) => task.id == id);

  if (index > -1) {
    tasks.splice(index, 1);
  }

  loadTasks();
}

function editTask(id) {
  let index = tasks.findIndex((task) => task.id == id);

  if (index > -1) {
    let task = tasks[index];
    const newTaskName = prompt("Edit task:", task.name);
    tasks[index] = {
        id: task.id,
        name: newTaskName.trim(),
        important: task.important 
    };
  }

  loadTasks();
}

function toggleImportant(id){
    let index = tasks.findIndex((task) => task.id == id);

    if (index > -1) {
        let task = tasks[index];
        task.important = true;

        tasks.splice(index, 1);
        tasks.unshift(task);
    }

    loadTasks();
}