const ul = document.querySelector("#todo-list");
const form = document.querySelector("form");
const newTodo = document.querySelector("#todo");
const emptyInp = document.querySelector("#empty-inp");
const searchInp = document.querySelector("#search");

searchInp.addEventListener("input", function () {
    const searchTask = searchInp.value.toLowerCase();
    const todos = ul.getElementsByTagName("li");

    for (let i = 0; i < todos.length; i++) {
        const todoText = todos[i].querySelector(".task-content").textContent.toLowerCase();
        if (todoText.includes(searchTask)) {
            todos[i].style.display = ""; 
        } else {
            todos[i].style.display = "none"; 
        }
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoText = newTodo.value.trim();
    if (todoText === "") {
        emptyInp.textContent = "Enter something";
        return;
    }

    const newLi = document.createElement("li");
    const content = document.createElement("div");
    content.setAttribute("contenteditable", "true");
    content.textContent = todoText;
    content.classList.add("task-content"); 

    const button = document.createElement("button");
    button.classList.add("delete-btn");
    button.textContent = "🗑️";

    newLi.appendChild(content);
    newLi.appendChild(button);
    ul.appendChild(newLi);

    newTodo.value = "";
    emptyInp.textContent = "";
});

ul.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    }
});

ul.addEventListener("dblclick", function (e) {
    e.target.style.textDecoration = "line-through";
});
