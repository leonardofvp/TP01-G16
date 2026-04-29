/* Aca esta el codigo del menu desplegable */
const menuHamburguesa = document.querySelector(".menu-hamburguesa");
const navbar = document.querySelector(".navbar");
const linksList = document.querySelectorAll(".links-navegacion li");

//Agrega un evento de click al menu de hamburguesa
menuHamburguesa.addEventListener("click", () => {
        //Alterna la clase "active" del menu hamburguesa y del menu fuera de pantalla
    menuHamburguesa.classList.toggle("activo");
    navbar.classList.toggle("activo");
});

//Agrega un evento click a cada elemento <li> dentro de la lista de navegacion
linksList.forEach(link => {
    //Cuando se hace click en un enlace se cierra el menu desplegable
    //Esto es para que por ejemplo si se clickea "inicio" estando en la pagina de inicio, el menu se cierre y no moleste
    link.addEventListener("click", () => {
        menuHamburguesa.classList.toggle("activo");
        navbar.classList.toggle("activo");
        
    });
});



