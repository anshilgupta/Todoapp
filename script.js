// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  // Get the task input value
  const newTask = taskInput.value;

  // Check if the input is not empty
  if (newTask.trim() !== "") {
    // Add the new task to the array
    tasks.push(newTask);

    // Clear the input field
    taskInput.value = "";

    // Render the tasks
    renderTasks();
  }
}

// Function to render tasks
function renderTasks() {
  const taskList = document.getElementById("taskList");

  // Clear the existing tasks
  taskList.innerHTML = "";

  // Loop through the tasks array and create list items
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            ${task}
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
    taskList.appendChild(listItem);
  });
}

// Function to delete a task
function deleteTask(index) {
  // Remove the task from the array
  tasks.splice(index, 1);

  // Render the updated tasks
  renderTasks();
}

// Initial render
renderTasks();
