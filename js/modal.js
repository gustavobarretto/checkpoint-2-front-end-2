import { checkoutTasks } from "./accordion.js";
// Evento para criação do modal no HTML5.

// Função para abrir o modal
const modal = document.getElementById("modal");
const abrirModal = document.querySelector(".addTarefa");

abrirModal.addEventListener("click", event => {
    event.preventDefault()
    let tituloForaModal = document.querySelector(".nova-tarefa input").value;
    const tituloModal = document.querySelector("#modal form input");
    tituloModal.value = tituloForaModal;
    modal.style.display = "block";   
})

// Função para fechar o modal
const fecharModal = document.querySelector(".fas");
fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
})

window.addEventListener("click", event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }  
})

// Inserindo tarefa do modal
const form = document.forms.formtask;
const { task, date, description, submit } = form;

submit.addEventListener("click", (event) => {
    event.preventDefault()
    const titleTask = task.value;
    const dateTask = date.value;
    const descriptionTask = description.value;
    const main = document.querySelector("main")
    const section = document.createElement("section")
    section.setAttribute("class", "tasks");
    main.appendChild(section)
    section.innerHTML += `
        <img src="./assets/box.svg" alt="">
        <h5>${titleTask}</h5>
        <i class="far fa-trash-alt"></i>
        <p class="date">${dateTask}</p>
        <p class="acc">${descriptionTask}</p>
`
    modal.style.display = "none";

    form.reset();

    checkoutTasks();

})



