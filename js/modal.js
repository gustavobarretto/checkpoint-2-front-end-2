import { checkoutTasks } from "./accordion.js";
import { checkValidationTask, checkValidationDate, checkValidationDescription } from "./validations.js";

// Criar um import das validações


// Evento para criação do modal no HTML5.

// Função para abrir o modal
const modal = document.getElementById("modal");
const abrirModal = document.querySelector(".addTarefa");

abrirModal.addEventListener("click", event => {
    event.preventDefault();
    let tituloForaModal = document.querySelector(".nova-tarefa input").value;
    const tituloModal = document.querySelector("#modal form input");
    tituloModal.value = tituloForaModal;
    modal.style.display = "block";
});

// Função para fechar o modal
const fecharModal = document.querySelector(".fas");
fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Inserindo tarefa preenchido no modal
const form = document.forms.formtask;
const { task, date, description } = form;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleTask = task.value; // Título da tarefa
    const dateTask = date.value; // Data fatal da tarefa
    const descriptionTask = description.value; // Descrição da tarefa

    if (checkValidationTask, checkValidationDate, checkValidationDescription) {
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
        checkoutTasks();
    } else {
        alert("Preencha todos os campos corretamente!");
    }
});























