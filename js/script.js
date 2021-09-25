/* Fetch irá me retornar uma promsise, posso usar async await, .then catch
    Response trará um body na resposta que não está acessível diretamente pelo objeto 'response' e por isso chamamos o método json() para converter para json

    O retorno do response será outra promise que passo para o data, que serão os dados do json. 

    Caso eu peça para o fetch um objeto que não comtém ele irá retornar o erro 404 que trato da seguinte forma
    fetch("https://jsonplaceholder.typicode.com/todos/201")
    .then(response => {
    if (response.ok) {
        console.log("SUCESSO");
    } else {
        console.log("Sem sucesso")
    }
})

*/
import { checkoutTasks } from "./accordion.js";
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
             section.innerHTML += `
                 <img src="./assets/box.svg" alt="">
                 <h5>${el.title}</h5>
                 <i class="far fa-trash-alt"></i>
                 <p class="date">${el.id}</p>
                 <p class="acc">${el.title}</p>
              
              
              `
         } else {
             section.className = "tasks checked active";
             main.appendChild(section)
             section.innerHTML += `
                 <img src="./assets/checkbox.svg" alt="">
                 <h5>${el.title}</h5>
                 <i class="far fa-trash-alt"></i>
                 <p class="date">${el.id}</p>
                 <p class="acc">${el.title}</p>
              
              
              `
            
        }
        //section.setAttribute("class", "tasks");
       
         
    })
    const organizeTasks = (checkBox1) => {
        if(checkBox1.parentNode.classList.contains("checked")) {
            ((checkBox1.parentElement).parentElement) // get the Main
            .insertAdjacentElement('beforeend', checkBox1.parentElement)
    
        } else {
            ((checkBox1.parentElement).parentElement).children[1] // get the firstChild of the Main
            .insertAdjacentElement('afterend', checkBox1.parentElement)
        };
    }
    checkoutTasks();
    const checkBox = document.querySelectorAll(".tasks img")
    checkBox.forEach(checkBox => {
        organizeTasks(checkBox);
    })

    
})