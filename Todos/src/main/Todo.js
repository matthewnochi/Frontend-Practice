// Todo.js
class Todo {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}

class Project{
    constructor(title) {
        this.title = title;
        this.todos = [];

    }

    addToDo(title, desc, dueDate, priority) {
        if (!this.todos.some(todo => todo.title === title)) {
            let newTodo = new Todo(title, desc, dueDate, priority);
            this.todos.push(newTodo);
        } else alert("Title already found");
    }

    removeToDo(title) {
        const index = this.todos.findIndex(todo => todo.title === title);
        if (index !== -1) {
            this.todos.splice(index, 1);
        } else alert("No title found");
    }
}

export default class Main {
    currProj; 

    constructor() {
        this.projects = [];
    }

    addProj(title) {
        if (!this.projects.some(project => project.title === title)) {
            let newProject = new Project(title);
            this.projects.push(newProject);
            this.currProj = newProject;
        }
    }

    removeProj(title) {
        const index = this.projects.findIndex(project => project.title === title);
        if (index !== -1) {
            this.projects.splice(index, 1);
        }
    }

    changeProj(title) {
        if (this.projects.some(project => project.title === title)) {
            this.currProj = this.projects.find(project => project.title === title);
        }
    }

    setProj() {
        this.currProj = undefined;
    }

    addToDo(title, desc, dueDate, priority) {
        this.currProj.addToDo(title, desc, dueDate, priority);
    }
    
    removeToDo(title) {
        this.currProj.removeToDo(title);
    }

    listAllTodos() {
        return this.projects.flatMap(project => project.todos);
    }

    listCurrentProjectTodos() {
        return this.currProj ? this.currProj.todos : [];
    }

    listProjects() {
        return this.projects.flatMap(project => project.title);
    }
}