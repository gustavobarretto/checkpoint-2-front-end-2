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
import { tasksFunctions } from "./accordion.js";
import { checkTasks } from "./checkTasks.js";
import { organizeTasks } from "./organizeTasks.js";

const checkAndChecked = (title, id, img, date) => {

    return  `
                 <img src="./assets/${img}.svg" alt="">
                 <h5>Id: ${id} - ${title}</h5>
                 <i class="far fa-trash-alt"></i>
                 <p class="date">${date}</p>
                 <p class="acc">${title}</p>  
            `

}


fetch("https://jsonplaceholder.typicode.com/todos/")
.then(response => response.json())
.then(data => {
     const markup = data.map(el => {
        const form = document.forms.formtask;
        const { task, date, description, submit } = form;
        const titleTask = task.value;
        const dateTask = date.value;
        const descriptionTask = description.value;
        const main = document.querySelector("main")
        const section = document.createElement("section")
         if (!el.completed){
             section.setAttribute("class", "tasks");
             main.appendChild(section)
             section.innerHTML += checkAndChecked(el.title, el.id, "box")

         } else {
             section.className = "tasks checked active";
             main.appendChild(section)
             section.innerHTML += checkAndChecked(el.title, el.id, "checkbox")
            
        } 
         
    })

    tasksFunctions();
    organizeTasks();
    checkTasks();
})