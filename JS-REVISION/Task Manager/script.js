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

addTaskButton.addEventListener("click", handleAddTask)