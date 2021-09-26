// This module check all conclued or unchecked the tasks 
// and all information inside the tasks.
import { organizeTasks } from './organizeTasks.js';

export const checkTasks = () => {
    const checkBox = document.querySelectorAll(".tasks img")
    checkBox.forEach(checkBox => {
        checkBox.addEventListener('click', () => {
        checkBox.parentNode.classList.toggle("checked");
        checkBox.parentNode.classList.contains("checked") ?
        checkBox.src = "../assets/checkbox.svg" :
        checkBox.src = "../assets/box.svg";

        if (checkBox.parentNode.classList.contains("active")) {
            ((checkBox.parentElement).lastElementChild).style.display = "none";
            ((checkBox.parentNode).classList.toggle("active"));
        }

        setTimeout( () => {
            organizeTasks();
    }, 600);  
    })})};