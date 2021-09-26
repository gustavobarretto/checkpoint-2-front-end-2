export function tasksFunctions() {

    
    // Showing the accordion
    const tasks = document.querySelectorAll(".tasks");
    tasks.forEach(tasks => {
        tasks.addEventListener("click", () => {
            tasks.classList.toggle("active");
            const panel = tasks.lastElementChild;
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
    
    // Deleting task function
    tasks.forEach(tasks => {
        const trashBin = tasks.childNodes[5];
        trashBin.addEventListener("click", () => {
            trashBin.classList.toggle("active");
            const deleteTask = confirm("Deseja realmente deletar esta tarefa?");
            deleteTask ? tasks.remove() : "";
        });
    });
}

