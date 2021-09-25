export function checkoutTasks() {

    const tasks = document.querySelectorAll(".tasks");
    
    // Showing the accordion
    tasks.forEach(tasks => {
        tasks.addEventListener("click", () => {
            tasks.classList.toggle("active");
            let panel = tasks.lastElementChild;
            const trashBin = tasks.childNodes[5];
    
            if (trashBin.classList.contains("active") || tasks.classList.contains("checked")) {
                trashBin.classList.toggle("active");
                tasks.classList.toggle("active");
            } else {
                panel.style.display == "block" ?
                    panel.style.display = "none" :
                    panel.style.display = "block";
            }
        });
    });
    
    // Delete task
    tasks.forEach(tasks => {
        const trashBin = tasks.childNodes[5];
        trashBin.addEventListener("click", () => {
            trashBin.classList.toggle("active");
            const deleteTask = confirm("Deseja realmente deletar?");
            deleteTask ? tasks.remove() : "";
        });
    });
    
    // Checkbox function
    const checkBox = document.querySelectorAll(".tasks img");
    
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
            organizeTasks(checkBox)
        }, 600);  
    })});
    
    const organizeTasks = (checkBox) => {
        if(checkBox.parentNode.classList.contains("checked")) {
            ((checkBox.parentElement).parentElement) // get the Main
            .insertAdjacentElement('beforeend', checkBox.parentElement)
    
        } else {
            ((checkBox.parentElement).parentElement).children[1] // get the firstChild of the Main
            .insertAdjacentElement('afterend', checkBox.parentElement)
        };
    }
}

