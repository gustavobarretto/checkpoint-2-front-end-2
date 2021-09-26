import { tasksFunctions } from "./accordion.js";
import { checkTasks } from "./checkTasks.js";
import { organizeTasks } from "./organizeTasks.js";

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
const { task, date, description, submit } = form;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleTask = task.value; // Título da tarefa
    const dateTask = date.value; // Data fatal da tarefa
    const descriptionTask = description.value; // Descrição da tarefa

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
});

//Validation for the Task Input

task.addEventListener('input', (e) => {
    if (/(?=(?:.*[a-zA-Z]){10,100})/.test(e.target.value)) {
        task.style.border = '2px solid lightgreen';
    } else {
        task.style.border = '2px solid lightsalmon';
    }
});


task.addEventListener('focusout', (e) => {
    // task.style.border === '2px solid lightsalmon' ?
        // task.focus() :
        task.style.border = 'none';
});



//Validation for the Description Input
description.addEventListener('input', (e) => {
    if (/(?=(?:.*[a-zA-Z]){10,1000})/.test(e.target.value)) {
        description.style.border = '2px solid lightgreen';
    } else {
        description.style.border = '2px solid lightsalmon';
    }
});

description.addEventListener('focusout', (e) => {
    task.style.border === '2px solid lightsalmon' ?
        task.focus() :
        task.style.border = 'none';
});

/*
let data = new Date();

console.log(data.getDate());
console.log(data.getMonth());
console.log(data.getFullYear());

console.log(`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`); */



















