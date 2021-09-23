// Evento para criação do modal no HTML5.

// Função para abrir o modal
const modal = document.getElementById("modal");
const abrirModal = document.querySelector("[class=addTarefa");
abrirModal.addEventListener("click", event => {
    event.preventDefault();
    modal.style.display = "block";
})

// Função para fechar o modal
const fecharModal = document.querySelector(".fas");
fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
})

window.addEventListener("click", event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    
})