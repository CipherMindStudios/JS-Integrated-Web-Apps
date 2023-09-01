// Selecting elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Event listener for form submission
taskForm.addEventListener('submit', addTask);

// Function to add a new task
function addTask(event) {
    event.preventDefault(); // Prevent form submission

    const taskText = taskInput.value.trim(); // Get task text and remove leading/trailing whitespace

    if (taskText !== '') {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = ''; // Clear input field
    }
}

// Function to create a new task item
function createTaskItem(taskText) {
    const taskItem = document.createElement('li');
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', completeTask);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    return taskItem;
}

// Function to mark a task as completed
function completeTask() {
    const taskItem = this.parentNode;
    taskItem.classList.toggle('completed');
}

// Function to delete a task
function deleteTask() {
    const taskItem = this.parentNode;
    taskList.removeChild(taskItem);
}
