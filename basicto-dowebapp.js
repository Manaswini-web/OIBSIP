// script.js
document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const pendingTasksList = document.getElementById('pending-tasks');
    const completedTasksList = document.getElementById('completed-tasks');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const taskItem = createTaskItem(taskText);
        pendingTasksList.appendChild(taskItem);

        newTaskInput.value = '';
    }

    function createTaskItem(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => editTask(taskItem));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => deleteTask(taskItem));

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', () => completeTask(taskItem));

        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        taskItem.appendChild(completeButton);

        return taskItem;
    }

    function editTask(taskItem) {
        const newTaskText = prompt('Edit your task', taskItem.firstChild.textContent);
        if (newTaskText !== null) {
            taskItem.firstChild.textContent = newTaskText;
        }
    }

    function deleteTask(taskItem) {
        taskItem.remove();
    }

    function completeTask(taskItem) {
        taskItem.classList.toggle('completed');
        if (taskItem.classList.contains('completed')) {
            completedTasksList.appendChild(taskItem);
            taskItem.querySelector('.complete').textContent = 'Undo';
        } else {
            pendingTasksList.appendChild(taskItem);
            taskItem.querySelector('.complete').textContent = 'Complete';
        }
    }
});
