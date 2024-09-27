document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create a new task item (li element)
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    // Create a checkbox for the task
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleTaskStatus);

    // Create a span to hold the task text
    const taskText = document.createElement('span');
    taskText.textContent = taskValue;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteTask);

    // Append checkbox, text, and delete button to the task item
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);

    // Add the task item to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
}

function toggleTaskStatus(event) {
    const taskItem = event.target.parentNode;
    if (event.target.checked) {
        taskItem.classList.add('completed');
    } else {
        taskItem.classList.remove('completed');
    }
}

function deleteTask(event) {
    const taskItem = event.target.parentNode;
    taskItem.remove();
}
