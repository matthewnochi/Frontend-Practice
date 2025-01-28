// dom.js
import Main from "./Todo.js";

export default function DOM() {
  const mainApp = new Main();

  const showAllButton = document.getElementById("show-all");
  const addButton = document.getElementById("add");
  const newProjectButton = document.getElementById("new-project");
  const projectList = document.querySelector(".project-list");
  const container = document.querySelector(".container");

  showAllButton.addEventListener("click", function () {
    const allToDos = mainApp.listAllTodos();
    container.replaceChildren();
    if (allToDos.length) {
      allToDos.forEach((todo) => {
        const todoElement = document.createElement("div");
        todoElement.textContent = `${todo.title} - ${todo.desc} - Due: ${todo.dueDate}`;
        todoElement.classList.toggle("completed", todo.completed);
        container.appendChild(todoElement);

        const completeCheckbox = document.createElement("input");
        completeCheckbox.type = "checkbox";
        completeCheckbox.checked = todo.completed;
        completeCheckbox.addEventListener("change", () => {
          todo.toggleComplete();
          todoElement.classList.toggle("completed", todo.completed);
        });
        todoElement.appendChild(completeCheckbox);
      });
    }
  });

  const overlay = document.querySelector(".project-add");
  const closePopupButton = document.getElementById("closePopup");
  const projectForm = document.getElementById("addProject");
  let isProjFormListenerAdded = false;

  const addTodo = document.querySelector(".todo-add");
  const closeButton = document.getElementById("closeTodo");
  const todoForm = document.getElementById("addTodo");
  let isTodoFormListenerAdded = false;

  function todoFormSubmit(event) {
    event.preventDefault();
    const title = document.getElementById("titleTodo").value;
    const desc = document.getElementById("descriptionInput").value;
    const dueDate = document.getElementById("dueDateInput").value;
    const prio = document.getElementById("priorityInput").value;
    if (mainApp.listCurrentProjectTodos().some((Todo) => Todo.title == title)) {
      alert("There is already a Todo with this title");
    } else {
      mainApp.addToDo(title, desc, dueDate, prio);
      addTodo.style.display = "none";
      const todoElement = document.createElement("div");
      todoElement.textContent = `${title} - ${desc} - Due: ${dueDate}`;
      todoElement.classList.toggle("completed", false);
      container.appendChild(todoElement);

      const completeCheckbox = document.createElement("input");
      completeCheckbox.type = "checkbox";
      completeCheckbox.checked = false;
      completeCheckbox.addEventListener("change", () => {
        const todo = mainApp
          .listCurrentProjectTodos()
          .find((todo) => todo.title === title);
        todo.toggleComplete();
        todoElement.classList.toggle("completed", todo.completed);
      });
      todoElement.appendChild(completeCheckbox);
    }
  }

  addButton.addEventListener("click", function () {
    if (typeof mainApp.currProj === "undefined") {
      alert("Please add or select a project");
    } else {
      const projStyles = window.getComputedStyle(overlay);
      const todoStyles = window.getComputedStyle(addTodo);
      if (
        projStyles.getPropertyValue("display") == "none" &&
        todoStyles.getPropertyValue("display") == "none"
      ) {
        document.getElementById("titleTodo").value = "";
        document.getElementById("dueDateInput").value = "";
        document.getElementById("descriptionInput").value = "";
        document.getElementById("priorityInput").value = "";
        addTodo.style.display = "flex";

        if (!isTodoFormListenerAdded) {
          isTodoFormListenerAdded = true;
          todoForm.addEventListener("submit", todoFormSubmit);
        }
      }
    }
  });

  closeButton.addEventListener("click", () => {
    addTodo.style.display = "none";
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    const title = document.getElementById("titleInput").value;
    if (mainApp.listProjects().includes(title)) {
      alert("There is already a project with this title");
    } else {
      mainApp.addProj(title);
      mainApp.changeProj(title);
      overlay.style.display = "none";
      const proj = document.createElement("div");
      proj.classList.add("proj-button");
      const newProj = document.createElement("button");
      newProj.textContent = title;
      newProj.addEventListener("click", function () {
        mainApp.changeProj(title);
        container.replaceChildren();
        const curr = mainApp.listCurrentProjectTodos();
        if (curr.length) {
          curr.forEach((todo) => {
            const todoElement = document.createElement("div");
            todoElement.textContent = `${todo.title} - ${todo.desc} - Due: ${todo.dueDate}`;
            todoElement.classList.toggle("completed", todo.completed);
            container.appendChild(todoElement);

            const completeCheckbox = document.createElement("input");
            completeCheckbox.type = "checkbox";
            completeCheckbox.checked = todo.completed;
            completeCheckbox.addEventListener("change", () => {
              todo.toggleComplete();
              todoElement.classList.toggle("completed", todo.completed);
            });
            todoElement.appendChild(completeCheckbox);
          });
        }
      });
      const deleteProj = document.createElement("button");
      deleteProj.textContent = "Delete";
      deleteProj.addEventListener("click", function () {
        mainApp.removeProj(title);
        proj.remove();
        if (mainApp.currProj === title) {
          container.replaceChildren();
          mainApp.setProj();
        }
      });
      projectList.appendChild(proj);
      proj.appendChild(newProj);
      proj.appendChild(deleteProj);
    }
  }

  newProjectButton.addEventListener("click", function () {
    const projStyles = window.getComputedStyle(overlay);
    const todoStyles = window.getComputedStyle(addTodo);
    if (
      projStyles.getPropertyValue("display") == "none" &&
      todoStyles.getPropertyValue("display") == "none"
    ) {
      document.getElementById("titleInput").value = "";
      overlay.style.display = "flex";

      if (!isProjFormListenerAdded) {
        projectForm.addEventListener("submit", handleFormSubmit);
        isProjFormListenerAdded = true;
      }
    }
  });

  closePopupButton.addEventListener("click", () => {
    overlay.style.display = "none";
  });
}
