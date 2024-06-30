document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
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

    function createTaskItem(taskText, completed = false, timestamp = new Date()) {
        const li = document.createElement('li');
        if (completed) li.classList.add('completed');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = `${taskText} (Added: ${timestamp.toLocaleString()})`;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => completeTask(li, taskSpan));

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTask(taskSpan));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(li));

        li.appendChild(taskSpan);
        if (!completed) li.appendChild(completeButton);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        return li;
    }

    function completeTask(taskItem, taskSpan) {
        taskItem.classList.add('completed');
        const timestamp = new Date();
        taskSpan.textContent += ` (Completed: ${timestamp.toLocaleString()})`;
        taskItem.querySelector('button').remove();
        completedTasksList.appendChild(taskItem);
    }

    function editTask(taskSpan) {
        const newTaskText = prompt('Edit task:', taskSpan.textContent.split(' (Added:')[0]);
        if (newTaskText !== null) {
            taskSpan.textContent = newTaskText + taskSpan.textContent.substring(taskSpan.textContent.indexOf(' (Added:'));
        }
    }

    function deleteTask(taskItem) {
        taskItem.remove();
    }
});
