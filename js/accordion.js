const accordion = document.querySelectorAll(".tasks");
const x = window.scrollX+document
          .querySelector(".far")
          .getBoundingClientRect()
          .top;
const y = window.scrollY+document
          .querySelector(".far")
          .getBoundingClientRect()
          .left;

console.log(x)
console.log(y)

accordion.forEach(accordion => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active");
        let panel = accordion.lastElementChild;
        if (panel.style.display == "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }})})


const tasks = document.querySelectorAll(".tasks");

tasks.forEach(tasks => {
    const trashBin = tasks.childNodes[5]
    console.log(tasks.childNodes[5])
    console.log(trashBin)
    trashBin.addEventListener("click", () => {
        const deleteTask = confirm("Deseja realmente deletar?")
        deleteTask ? tasks.remove() : "";
    })})