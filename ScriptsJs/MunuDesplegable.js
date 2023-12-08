const menu = document.querySelector("#menuDesplegable");
const abrirDesplegable = document.querySelector("#abrirDesplegable");
const cerrarDesplegable = document.querySelector("#cerrarDesplegable");

abrirDesplegable.addEventListener("click", () => {
    menu.classList.add("visible");
})

cerrarDesplegable.addEventListener("click", () => {
    menu.classList.remove("visible");
})