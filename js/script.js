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

const userName = JSON.parse(localStorage.getItem("user"));
const welcomeName = document.querySelector("p")
welcomeName.innerHTML = userName;
        

const checkAndChecked = (title, id, img, date) => {

    const newDate = new Date ();
    const creationDate = ((newDate.getDate() )) + "/" + ((newDate.getMonth() + 1)) + "/" + newDate.getFullYear(); 

    return  `
                 <img src="./assets/${img}.svg" alt="">
                 <h5>Id: ${id} - ${title}</h5>
                 <i class="far fa-trash-alt"></i>
                 <p class="date">Data de conclusão: ${creationDate}</p>
                 <p class="acc">${title}</p>
                 <p class="creationDate">Data de criação: ${creationDate}</p> 
                
            `

}

fetch("https://jsonplaceholder.typicode.com/todos/")
.then(response => response.json())
.then(data => {
     const markup = data.map(el => {
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
    const tasks = document.querySelectorAll(".tasks img")
    tasks.forEach( task => {
        organizeTasks(task);
    })
    tasksFunctions();
    checkTasks();
})