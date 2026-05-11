// Variable 
const inputTask = document.getElementById("input-task");
const inputPriority = document.getElementById("input-priority");
const addTaskButton = document.getElementById("add-task-button");

const searchedTask = document.getElementById("searched-task");
const filterPriority = document.getElementById("filter-priority");
const filterStatus = document.getElementById("filter-status");
const filterButton = document.getElementById("filter-button");
const displayTasksBox = document.getElementById("display-tasks-box");

const fetchTaskListFromLocalStrorage = () => {
  return JSON.parse(localStorage.getItem("task-list")) || [];
};

const updateTaskListToLocalStorage = (taskList) => {
  localStorage.setItem("task-list", JSON.stringify(taskList));
}

const handleAddTask = () => {
  // Taking the values
  const task = inputTask.value;
  const priority = inputPriority.value;
  const status = false;

  const taskList = fetchTaskListFromLocalStrorage();
  taskList.push({ task, priority, status });
  updateTaskListToLocalStorage(taskList);
}
// Display Tasks 
const displayTasks = () => {
  const taskList = fetchTaskListFromLocalStrorage();// get data 
  displayTasksBox.innerHTML = "";
  taskList.map((task, i) => {
    const div = document.createElement("div");
    div.innerHTML = `   <div class="d-flex justify-content-between shadow rounded border border-light p-3">
                <p class="fs-5">${task.task}</p>
                <div>
                    <button type="button" class="btn btn-warning me-2">Edit</button>
                    <button onclick="handleDeleteTask(${i})" type="button" class="btn btn-danger">Remove</button>
                </div>
            </div>`
    displayTasksBox.appendChild(div);
  })
}

// delete Button function 
const handleDeleteTask = (i) => {
  const taskList = fetchTaskListFromLocalStrorage();
  taskList.splice(i, 1);
  updateTaskListToLocalStorage(taskList);
  displayTasks();
}

addTaskButton.addEventListener("click", handleAddTask);
displayTasks();