const tasks = document.querySelectorAll(".tasks");


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


tasks.forEach(tasks => {
    const trashBin = tasks.childNodes[5];
    trashBin.addEventListener("click", () => {
        trashBin.classList.toggle("active");
        const deleteTask = confirm("Deseja realmente deletar?");
        deleteTask ? tasks.remove() : "";
    });
});

const checkBox = document.querySelectorAll(".tasks img");

checkBox.forEach(checkBox => {
    checkBox.addEventListener('click', () => {
        checkBox.parentNode.classList.toggle("checked");
        
        checkBox.parentNode.classList.contains("checked") ?
            checkBox.src = "../assets/checkbox.svg" :
            checkBox.src = "../assets/box.svg";
        
        // Onde comecei a acrescentar 
        tasks.forEach( task => {
            if(task.classList.contains("checked")) {
                const main = task.parentElement
                main.insertBefore(task, undefined)
            } 
        })
        // Onde termina meu acréscimo
        // Documentação https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore   
    });
});