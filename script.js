document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
  
    addButton.addEventListener('click', addTask);
    taskList.addEventListener('click', deleteTask);
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${taskText}</span>
          <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
      }
    }
  
    function deleteTask(event) {
      if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove();
      }
    }
  });
  