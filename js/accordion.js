const accordion = document.querySelectorAll(".accordion");
accordion.forEach(accordion => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active");
        let panel = accordion.lastElementChild;
        if (panel.style.display == "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
})
