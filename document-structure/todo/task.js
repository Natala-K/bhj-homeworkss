document.addEventListener('DOMContentLoaded', (event) => {
    const tasksList = document.getElementById('tasks__list');
    const taskInput = document.getElementById('task__input');
    const tasksForm = document.getElementById('tasks__form');

    loadTasks();

    tasksForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask(taskInput.value.trim());
    });

    function addTask(taskText) {
        if (taskText === '') {
            return;
        }

        const taskElement = createTaskElement(taskText);
        tasksList.appendChild(taskElement);

        saveTasks();
        taskInput.value = '';
        taskInput.focus();
    }

    function createTaskElement(taskText) {
        const task = document.createElement('div');
        task.classList.add('task');

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.textContent = taskText;

        const taskRemove = document.createElement('a');
        taskRemove.classList.add('task__remove');
        taskRemove.href = '#';
        taskRemove.textContent = '×';

        taskRemove.addEventListener('click', (event) => {
            event.preventDefault();
            removeTask(task);
        });

        task.appendChild(taskTitle);
        task.appendChild(taskRemove);

        return task;
    }

    function removeTask(taskElement) {
        taskElement.remove();
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task__title').forEach((taskElement) => {
            tasks.push(taskElement.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach((taskText) => {
            const taskElement = createTaskElement(taskText);
            tasksList.appendChild(taskElement);
        });
    }
});
