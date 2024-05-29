function newTodo() {
  const todoInput = document.getElementById("input-task").value.trim();
  if (todoInput === "") {
    return;
  }

  const taskWindow = document.createElement("div");
  taskWindow.id = "task-window";

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  taskWindow.innerHTML = `
    <div id="middle">
      <div id="checkbox">
        <i class="fa-regular fa-circle icon"></i>
      </div>
      <div id="main-tasks">
        <div id="top-section">
          <div id="left">
            <i class="fa-regular fa-calendar-days icon"></i>
            <h4>Today</h4>
          </div>
          <div id="right">
            <i class="fa-solid fa-stopwatch icon"></i>
            <h4>${currentTime}</h4>
          </div>
        </div>
        <div id="bottom-section">
          <div id="todo">
            <h5 id="todo-work">${todoInput}</h5>
          </div>
        </div>
      </div>
    </div>
    <div id="todo-right-section">
      <div id="delete" onclick="completed(this)">
        <i class="fa-solid fa-check delete-todo"></i>
      </div>
      <div id="delete" onclick="deleteTodo(this)">
        <i class="fa-solid fa-plus delete-todo"></i>
      </div>
    </div>
  `;

  const taskContainer = document.getElementById("task-container");
  taskContainer.appendChild(taskWindow);

  const totalTasksNo = document.getElementById("total-tasks-no");
  totalTasksNo.textContent = parseInt(totalTasksNo.textContent) + 1;

  document.getElementById("input-task").value = "";
}

function clearInput() {
  document.getElementById("input-task").value = "";
}

function completed(element) {
  const taskWindow = element.closest("#task-window");
  if (taskWindow) {
    taskWindow.remove();

    const completedTasksNo = document.getElementById("task-completed-no");
    completedTasksNo.textContent = parseInt(completedTasksNo.textContent) + 1;

    const totalTasksNo = document.getElementById("total-tasks-no");
    totalTasksNo.textContent = parseInt(totalTasksNo.textContent) - 1;
  }
}

function deleteTodo(element) {
  const taskWindow = element.closest("#task-window");
  if (taskWindow) {
    taskWindow.remove();

    const totalTasksNo = document.getElementById("total-tasks-no");
    totalTasksNo.textContent = parseInt(totalTasksNo.textContent) - 1;
  }
}
