import { tasksFunctions } from "./accordion.js";
import { checkTasks } from "./checkTasks.js";
import { organizeTasks } from "./organizeTasks.js";
import { checkValidationTask, checkValidationDate, checkValidationDescription } from "./validations.js";

// Event for the modal's creation inside to HTML5.

// Opening modal's functions 
const modal = document.getElementById("modal");
const abrirModal = document.querySelector(".addTarefa");

abrirModal.addEventListener("click", event => {
    event.preventDefault();
    let tituloForaModal = document.querySelector(".nova-tarefa input").value;
    const tituloModal = document.querySelector("#modal form input");
    tituloModal.value = tituloForaModal;
    modal.style.display = "block";
});

// Closing modal's function
const fecharModal = document.querySelector(".fas");
fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Inserting the new task on the to-do list
const form = document.forms.formtask;
const { task, date, description } = form;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleTask = task.value; // Task's title
    const dateTask = date.value; // Task's deadline
    const descriptionTask = description.value; // Task's description

    if (checkValidationTask && checkValidationDate && checkValidationDescription) {
        // textAreaValidation(descriptionTask);

        const main = document.querySelector("main");
        const section = document.createElement("section");
        section.setAttribute("class", "tasks");
        main.appendChild(section);
        section.innerHTML += `
        <img src="./assets/box.svg" alt="">
        <h5>${titleTask}</h5>
        <i class="far fa-trash-alt"></i>
        <p class="date">${dateTask}</p>
        <p class="acc">${descriptionTask}</p>
`;
        modal.style.display = "none";

        form.reset();

        organizeTasks();

        checkTasks();

        tasksFunctions();
    }
    else {
        alert("Preencha todos os campos corretamente.");
    }

});

























