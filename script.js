// Get DOM elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Add task when button clicked
addBtn.addEventListener("click", addTask);

// Also allow Enter key
taskInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Function to add a new task
function addTask() {
  const text = taskInput.value.trim();
  if (text === "") {
    alert("Please write a task before adding.");
    return;
  }

  // li container
  const li = document.createElement("li");
  li.className = "task-item";

  // span for text
  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;

  // delete button
  const delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.innerHTML = "🗑";
  delBtn.title = "Delete task";

  // delete current task on click
  delBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  // build li
  li.appendChild(span);
  li.appendChild(delBtn);

  // add to list
  taskList.appendChild(li);

  // clear input
  taskInput.value = "";
  taskInput.focus();
}