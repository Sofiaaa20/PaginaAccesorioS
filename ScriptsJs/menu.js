const menuCart = document.querySelector("#menuCart");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    menuCart.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    menuCart.classList.remove("visible");
})
