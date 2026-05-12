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
  taskList.unshift({ task, priority, status });
  updateTaskListToLocalStorage(taskList);
  displayTasks();
}
// Display Tasks 
const displayTasks = () => {
  displayTasksBox.innerHTML = "";
  const taskList = fetchTaskListFromLocalStrorage();// get data 
  taskList.map((task, i) => {
    const div = document.createElement("div");
    div.innerHTML = `   <div class="d-flex justify-content-between shadow rounded border ${task.priority == 'High' ? 'border-danger' : (task.priority == 'Medium') ? 'border-warning' : 'border-info'}  p-3">
               <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="checkDefault">
                <label class="form-check-label" for="checkDefault">
                </label>
              </div> <div  class = "w-75 text-wrap"><p class="fs-5">${task.task}</p>
                </div>               <div>
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