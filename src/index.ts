let variable: unknown = "12345";
const lengthOfString = (variable as string).length;

const jobinput = document.getElementById("todojob")! as HTMLInputElement;
const btn = document.getElementById("btn")! as HTMLButtonElement;

// const form = document.querySelector("#todoform"); // form == element
const formtodo = document.querySelector("form")!; // formtodo: HTMLFormElement | null
const todolist = document.querySelector("#todolist")!;

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const item = document.createElement("LI");
  item.append(jobinput.value);

  const checkbox = document.createElement("INPUT") as HTMLInputElement;
  checkbox.type = "checkbox";
  item.append(checkbox);

  todolist.append(item);
  jobinput.value = "";
}
// formtodo.addEventListener("submit", function(e) {
//     e.preventDefault();
//     console.log("제출됨!");
// })

formtodo.addEventListener("submit", handleSubmit);

// btn.addEventListener("click", () => {
//     alert(jobinput.value);
//     (<HTMLInputElement>jobinput).value = "";
// })
// jobinput.value
