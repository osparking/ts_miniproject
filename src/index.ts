const jobinput = document.getElementById("todojob")! as HTMLInputElement;
const btn = document.getElementById("btn")! as HTMLButtonElement;
const formtodo = document.querySelector("form")!; // formtodo: HTMLFormElement | null
const todolist = document.querySelector("#todolist")!;

interface Todo {
  task: string;
  completed: boolean;
}

const todo_list: Todo[] = readTodos();
todo_list.forEach(createTodo);

function readTodos(): Todo[] {
  const localTodos = localStorage.getItem("todos");
  if (localTodos === null) {
    return [];
  }
  return JSON.parse(localTodos);
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  const todoElement: Todo = {
    task: jobinput.value,
    completed: false,
  };
  todo_list.push(todoElement);
  saveTodos();
  createTodo(todoElement);

  jobinput.value = "";
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todo_list));
}

function createTodo(element: Todo) {
  const item = document.createElement("LI");
  const checkbox = document.createElement("INPUT") as HTMLInputElement;
  checkbox.type = "checkbox";
  checkbox.checked = element.completed;
  checkbox.addEventListener("change", function (e) {
    element.completed = checkbox.checked;
    saveTodos();
  });
  item.append(element.task);
  item.append(checkbox);
  todolist.append(item);
}

formtodo.addEventListener("submit", handleSubmit);

const storedTodos = localStorage.getItem("todos");
console.log(storedTodos);
