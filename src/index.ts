let variable: unknown = "12345";
const lengthOfString = (variable as string).length;

const jobinput = document.getElementById("todojob")! as HTMLInputElement;
const btn = document.getElementById("btn")! as HTMLButtonElement;
btn.addEventListener("click", () => {
    alert(jobinput.value);
    (<HTMLInputElement>jobinput).value = "";
})
// jobinput.value
