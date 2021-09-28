import { checkValidationTask, checkValidationDate, checkValidationDescription } from "./validations.js";
/* Fetch irá me retornar uma promsise, posso usar async await, .then catch
    Response trará um body na resposta que não está acessível diretamente pelo objeto 'response' e por isso chamamos o método json() para converter para json

    O retorno do response será outra promise que passo para o data, que serão os dados do json. 

    Caso eu peça para o fetch um objeto que não contém ele irá retornar o erro 404 que trato da seguinte forma
    fetch("https://jsonplaceholder.typicode.com/todos/201")
    .then(response => {
    if (response.ok) {
        console.log("SUCESSO");
    } else {
        console.log("Sem sucesso")
    }
})

*/

// Nome do login
const userName = JSON.parse(localStorage.getItem("user"));
const welcomeName = document.querySelector("p");
welcomeName.innerHTML = userName;
// ************************************

const tasks = document.querySelectorAll(".tasks");
const checkBox = document.querySelectorAll(".tasks img");

// Organiza as tarefas
const organizeTasks = (tasks) => {
    if (tasks.classList.contains("checked")) {
        ((tasks).parentElement) // get the Main
            .insertAdjacentElement('beforeend', tasks);

    } else {
        ((tasks).parentElement).children[1] // get the firstChild of the Main
            .insertAdjacentElement('afterend', tasks);
    };

};

const checkAndChecked = (title, id, img) => {

    const newDate = new Date();
    const creationDate = ((newDate.getDate())) + "/" + ((newDate.getMonth() + 1)) + "/" + newDate.getFullYear();

    return `
                 <img class="checkbox" src="./assets/${img}.svg" alt="">
                 <h5 class="title-task">Id: ${id} - ${title}</h5>
                 <i class="far fa-trash-alt"></i>
                 <p class="date">Data de conclusão: ${creationDate}</p>
                 <p class="acc">${title}</p>
                 <p class="creationDate">Data de criação: ${creationDate}</p> 
                
            `;
};

fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => response.json())
    .then(data => {
        const markup = data.map(el => {
            const main = document.querySelector("main");
            const section = document.createElement("section");
            if (!el.completed) {
                section.setAttribute("class", "tasks");
                main.appendChild(section);
                section.innerHTML += checkAndChecked(el.title, el.id, "box");

            } else {
                section.className = "tasks checked active";
                main.appendChild(section);
                section.innerHTML += checkAndChecked(el.title, el.id, "checkbox");

            }
            const checkBox = document.querySelectorAll(".tasks img");
            checkBox.forEach(checkBox => {
                organizeTasks(checkBox.parentElement);
            });

        });
    });

// Showing accordion's function
const accordion = (event) => {
    console.log(event);
    if (!event.classList.contains("checked")) {
        event.classList.toggle("active");
        const acc = event.childNodes[9];
        const dateCreation = event.childNodes[11];
        if (acc.style.display == "block" && dateCreation.style.display) {
            acc.style.display = "none";
            dateCreation.style.display = "none";
        } else {
            acc.style.display = "block";
            dateCreation.style.display = "block";
        }
    }
};

// Deleting task's function
const trashBin = event => {
    event.classList.toggle("active");
    const deleteTask = confirm("Deseja realmente deletar esta tarefa?");
    deleteTask ? event.parentElement.remove() : "";
};

// Checkbox task's function
const checkTasks = event => {
    console.log(event.parentElement);
    if (event.parentElement.classList.contains("active")) {
        event.parentElement.childNodes[9].style.display = "none";
        event.parentElement.childNodes[11].style.display = "none";
        event.parentElement.classList.toggle("active");
    }

    event.parentElement.classList.toggle("checked");
    if (event.parentElement.classList.contains("checked")) {
        event.setAttribute("src", "../assets/checkbox.svg");
    } else {
        event.setAttribute("src", "../assets/box.svg");
    }

    setTimeout(() => {
        organizeTasks(event.parentElement);
    }, 600);

};

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
        const newDate = new Date();
        const creationDate = ((newDate.getDate())) + "/" + ((newDate.getMonth() + 1)) + "/" + newDate.getFullYear();
        section.setAttribute("class", "tasks");
        main.appendChild(section);
        section.innerHTML += `
        <img class="checkbox" src="./assets/box.svg" alt="">
        <h5 class="title-task">${titleTask}</h5>
        <i class="far fa-trash-alt"></i>
        <p class="date">Data de Conclusão: ${dateTask}</p>
        <p class="acc">${descriptionTask}</p>
        <p class="creationDate">Data de criação: ${creationDate}</p> 
`;
        modal.style.display = "none";

        form.reset();


        organizeTasks(section);


    }
    else {
        alert("Preencha todos os campos corretamente.");
    }

});

// Menu's functions
document.body.addEventListener("click", event => {
    switch (event.target.tagName) {
        case "IMG":
            !(event.target.className == "botao-tarefa") ?
                checkTasks(event.target)
                : "";
            break;
        case "H5":
            accordion(event.target.parentElement);
            break;
        case "I":
            !(event.target.className == "fas fa-times fa-lg") ?
                trashBin(event.target)
                : "";
            break;
        case "SECTION":
            accordion(event.target);
            break;
        case "P":
            accordion(event.target.parentElement);
            break;
    }
});

