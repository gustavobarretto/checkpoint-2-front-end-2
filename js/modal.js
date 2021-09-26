import { checkoutTasks } from "./accordion.js";

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

    validationTitle(task, date, description);
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
});


let checkValidationTask = false;
let checkValidationDescription = false;
let checkValidationDate = false;


//Validation for the Task Input

task.addEventListener('input', (e) => {
    if (/(?=(?:.*[a-zA-Z]){10,100})/.test(e.target.value)) {
        task.style.border = '2px solid lightgreen';
        task.createElement('p').insertAdjacentElement('afterend', task);


        checkValidationTask = true;

    } else {
        task.style.border = '2px solid lightsalmon';
        checkValidationTask = false;
    }
});


task.addEventListener('focusout', (e) => {
    task.style.border === '2px solid lightsalmon' ?
        task.focus() :
        task.style.border = 'none';
});


let errorMessage = document.createElement('p');


//Validation for the Description Input
description.addEventListener('input', (e) => {
    if (/^[a-z0-9_.-\s]{10,1000}$/.test(e.target.value)) {
        description.style.border = '2px solid lightgreen';
        checkValidationDescription = true;

    } else {
        description.style.border = '2px solid lightsalmon';
        checkValidationDescription = false;
    }
});

description.addEventListener('focusout', (e) => {
    task.style.border === '2px solid lightsalmon' ?
        task.focus() :
        task.style.border = 'none';
});


function dateMask(value) {
    return value
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\/\d{2})(\d)/, '$1/$2')
        .replace(/(\/\d{4})\d+?$/, '$1');
}

function checkDate(dateValue) {
    let dateRegex = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;

    if (dateRegex.test(dateValue)) {
        date.style.border = '2px solid lightgreen';
        checkValidationDate = false;
    }
    else {
        errorMessage.innerHTML = "Digite uma data válida";
        form.appendChild(errorMessage);
        errorMessage.insertAdjacentElement('beforEnd', date);
        errorMessage.style.cssText = "color: red;";
        date.style.border = '2px solid lightsalmon';

        return true;
    }
}


date.addEventListener('input', e => {
    e.target.value = dateMask(e.target.value);
    checkDate(e.target.value);
});





















