let tasks = [];
const taskForm = document.getElementById("taskForm");
window.onload = function () {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    displayTasks();
};

function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("taskId").value;
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;

    if (!title || !dueDate) {
        alert("Title and Due Date are required!");
        return;
    }

    if (id) {
        const index = tasks.findIndex(task => task.id == id);
        tasks[index] = { id, title, description, dueDate, priority };
    } else {
        const newTask = {
            id: Date.now(),
            title,
            description,
            dueDate,
            priority
        };
        tasks.push(newTask);
    }

    saveToLocalStorage();
    displayTasks();
    clearForm();
});

function displayTasks() {
    const taskList = document.getElementById("taskList");
    const filter = document.getElementById("filterPriority").value;

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (filter !== "All") {
        filteredTasks = tasks.filter(task => task.priority === filter);
    }

    if (filteredTasks.length === 0) {
        taskList.innerHTML = "<p>No tasks found</p>";
        return;
    }

    filteredTasks.forEach(task => {
        const div = document.createElement("div");
        div.classList.add("task");

        div.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description || ""}</p>
            <p><strong>Due:</strong> ${task.dueDate}</p>
            <p><strong>Priority:</strong> ${task.priority}</p>
            <button onclick="editTask(${task.id})">Edit</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;

        taskList.appendChild(div);
    });
}

function editTask(id) {
    const task = tasks.find(t => t.id == id);
    document.getElementById("taskId").value = task.id;
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    document.getElementById("dueDate").value = task.dueDate;
    document.getElementById("priority").value = task.priority;
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id != id);
    saveToLocalStorage();
    displayTasks();
}

document.getElementById("filterPriority").addEventListener("change", displayTasks);

function clearForm() {
    document.getElementById("taskId").value = "";
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("priority").value = "Low";
}