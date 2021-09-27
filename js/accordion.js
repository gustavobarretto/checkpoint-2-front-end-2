export function tasksFunctions() {
    
    // Showing accordion's function
    const tasks = document.querySelectorAll(".tasks");
    tasks.forEach(tasks => {
        tasks.addEventListener("click", () => {
            tasks.classList.toggle("active");
            const acc = tasks.childNodes[9];
            const dateCreation = tasks.childNodes[11];
            const trashBin = tasks.childNodes[5];
            
            if (trashBin.classList.contains("active") || tasks.classList.contains("checked")) {
                trashBin.classList.toggle("active");
                tasks.classList.toggle("active");
            } else {
                if (acc.style.display == "block" && dateCreation.style.display) {
                    acc.style.display = "none";
                    dateCreation.style.display = "none";
                } else {
                    acc.style.display = "block";
                    dateCreation.style.display = "block";
                }
            }
        });
    });
    
    // Deleting task's function
    tasks.forEach(tasks => {
        const trashBin = tasks.childNodes[5];
        trashBin.addEventListener("click", () => {
            trashBin.classList.toggle("active");
            const deleteTask = confirm("Deseja realmente deletar esta tarefa?");
            deleteTask ? tasks.remove() : "";
        });
    });
}

