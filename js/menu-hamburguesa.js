/* Aca esta el codigo del menu desplegable */
const menuHamburguesa = document.querySelector(".menu-hamburguesa");
const navbar = document.querySelector(".navbar");
const linksList = document.querySelectorAll(".links-navegacion li");

// Función para alternar el menú y el bloqueo de scroll
function toggleMenu() {
    menuHamburguesa.classList.toggle("activo");
    navbar.classList.toggle("activo");

    // Bloquea o libera el scroll del body dependiendo de si el menú está activo
    if (navbar.classList.contains("activo")) {
        document.body.style.overflow = "hidden"; // Evita el scroll de fondo
    } else {
        document.body.style.overflow = "auto"; // Devuelve el scroll al cerrar
    }
}

// Agrega un evento de click al menu de hamburguesa
menuHamburguesa.addEventListener("click", toggleMenu);

// Agrega un evento click a cada elemento <li> dentro de la lista de navegacion
linksList.forEach(link => {
    link.addEventListener("click", () => {
        // Solo ejecuta el cierre si el menú está realmente abierto
        if (navbar.classList.contains("activo")) {
            toggleMenu();
        }
    });
});