document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText !== '') {
            const li = document.createElement('li');
            li.className = 'task-item';
            
            const taskSpan = document.createElement('span');
            taskSpan.className = 'task-text';  // Add class
            taskSpan.textContent = taskText;
            
            // Add click to complete functionality
            taskSpan.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';  // Add class
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                li.classList.add('fade-out');
                setTimeout(() => {
                    taskList.removeChild(li);
                }, 300);
            });
            
            li.appendChild(taskSpan);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
            
            taskInput.value = '';
        }
    }
    // Event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
