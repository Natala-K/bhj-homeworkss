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
        tasksList.insertAdjacentHTML('beforeend', taskElement);

        saveTasks();
        taskInput.value = '';
        taskInput.focus();
    }

    function createTaskElement(taskText) {
        return `
            <div class="task">
                <div class="task__title">
                    ${taskText}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;
    }

    tasksList.addEventListener('click', (event) => {
        if (event.target.classList.contains('task__remove')) {
            event.preventDefault();
            const taskElement = event.target.closest('.task');
            removeTask(taskElement);
        }
    });

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
            tasksList.insertAdjacentHTML('beforeend', taskElement);
        });
    }
});
