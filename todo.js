//method using new FormData() to take input data
const todoList = document.getElementById("todoList");
const todos = document.getElementById("todos");

todoList.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target)
  const todo = document.createElement("li");
  todo.innerText = formData.get("todo");
  todo.setAttribute("class", "todo");
  todos.appendChild(todo);
  todoList.reset();

})

window.addEventListener('load', () => {
    buttonClickCreateElement() 
})
