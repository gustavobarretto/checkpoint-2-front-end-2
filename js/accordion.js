const accordion = document.querySelectorAll(".tasks");

accordion.forEach(accordion => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active");
        let panel = accordion.lastElementChild;
        const trashBin = accordion.childNodes[5]
        
        console.log(trashBin.classList[2])

        if(trashBin.classList[2] == "active") {
            trashBin.classList.toggle("active")
            accordion.classList.toggle("active")
        } else {
            if (panel.style.display == "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }   
        }
    })})

    const tasks = document.querySelectorAll(".tasks");

tasks.forEach(tasks => {
    const trashBin = tasks.childNodes[5]
    trashBin.addEventListener("click", () => {
        trashBin.classList.toggle("active")
        const deleteTask = confirm("Deseja realmente deletar?")
        deleteTask ? tasks.remove() : "";
    })})