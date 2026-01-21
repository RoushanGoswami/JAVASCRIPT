let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const filterPriority = document.getElementById("filterPriority");
const searchTask = document.getElementById("searchTask");

taskForm.addEventListener("submit", addTask);
filterPriority.addEventListener("change", displayTasks);
searchTask.addEventListener("keyup", displayTasks);

function addTask(e) {
    e.preventDefault();

    const id = document.getElementById("taskId").value;
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;

    if (!title || !dueDate) {
        alert("Task Title and Due Date are required!");
        return;
    }

    if (id) {
        const task = tasks.find(t => t.id == id);
        task.title = title;
        task.description = description;
        task.dueDate = dueDate;
        task.priority = priority;
    } else {
        tasks.push({
            id: Date.now(),
            title,
            description,
            dueDate,
            priority
        });
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskForm.reset();
    document.getElementById("taskId").value = "";
    displayTasks();
}

function displayTasks() {
    taskList.innerHTML = "";

    const filter = filterPriority.value;
    const search = searchTask.value.toLowerCase();

    tasks
        .filter(task => filter === "All" || task.priority === filter)
        .filter(task => task.title.toLowerCase().includes(search))
        .forEach(task => {
            const div = document.createElement("div");
            div.className = `task ${task.priority.toLowerCase()}`;
            div.dataset.id = task.id;

            div.innerHTML = `
                <h3>${task.title}</h3>
                <small>${task.description}</small>
                <small>Due: ${task.dueDate}</small>
                <small>Priority: ${task.priority}</small>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            `;

            div.querySelector(".edit").onclick = () => editTask(task.id);
            div.querySelector(".delete").onclick = () => deleteTask(task.id, div);

            taskList.appendChild(div);
        });
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);

    document.getElementById("taskId").value = task.id;
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    document.getElementById("dueDate").value = task.dueDate;
    document.getElementById("priority").value = task.priority;
}

function deleteTask(id, element) {
    if (confirm("Are you sure you want to delete this task?")) {
        element.classList.add("removing");

        setTimeout(() => {
            tasks = tasks.filter(task => task.id !== id);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            displayTasks();
        }, 350);
    }
}

displayTasks();
