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
const { task, date, description } = form;

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


let labels = document.querySelectorAll('label');
const [taskLabel, dateLabel, descriptionLabel] = labels;

//Function for create a today's date
/* const formatYmd = date => date.toISOString().slice(0, 10).split("-").reverse().join("/"); */

const inputedDate = date => {
    const [day, month, year] = date.split("/");
    const ValidDate = new Date(`${year}-${month}-${day}`).getTime();

    return ValidDate;
};

const dateNow = new Date().getTime();
console.log(dateNow);

const toTime = date => {
    let hours = Math.floor(totalSeconds / 3600);
    let totalSeconds = 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
};


let checkValidationTask = false;
let checkValidationDescription = false;
let checkValidationDate = false;


//Validation for the Task Input

task.addEventListener('input', (e) => {
    if (/(?=(?:.*[a-zA-Z]){10,100})/.test(e.target.value)) {
        task.style.border = '2px solid lightgreen';
        taskLabel.innerHTML = `Tarefa`;
        taskLabel.style.color = "#000";
        checkValidationTask = true;

    } else {
        task.style.border = '2px solid lightsalmon';
        taskLabel.innerHTML = `Sua tarefa tem que ter pelo menos 10 caracteres`;
        taskLabel.style.color = "lightsalmon";
        checkValidationTask = false;
    }
});


task.addEventListener('focusout', () => {
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
        dateLabel.innerHTML = `Data de Entrega`;
        dateLabel.style.color = "#000";
        checkValidationDate = false;
    }
    else {
        dateLabel.innerHTML = `Digite uma data válida!`;
        dateLabel.style.color = "lightsalmon";
        date.style.border = '2px solid lightsalmon';

    }


    if (inputedDate(dateValue) < dateNow) {
        dateLabel.innerHTML = `Digite uma data no futuro`;
        dateLabel.style.color = "lightsalmon";
        date.style.border = '2px solid lightsalmon';
    }
}


date.addEventListener('input', e => {
    e.target.value = dateMask(e.target.value);
    checkDate(e.target.value);
});
date.addEventListener('focusout', () => {
    date.style.border = 'none';
});

//Validation for the Description Input
description.addEventListener('input', (e) => {
    if (/(?=(?:.*[a-zA-Z]){10,1000})/.test(e.target.value)) {
        description.style.border = '2px solid lightgreen';
        descriptionLabel.innerHTML = `Descrição da Tarefa`;
        descriptionLabel.style.color = "#000";
        checkValidationDescription = true;

    } else {
        description.style.border = '2px solid lightsalmon';
        descriptionLabel.innerHTML = `A descrição tem que ter pelo menos 10 caracteres`;
        descriptionLabel.style.color = "lightsalmon";
        checkValidationDescription = false;
    }
});

description.addEventListener('focusout', () => {
    task.style.border = 'none';
});





















