
// =================================
// SELECCIONAR ELEMENTOS
// =================================

const diapositivas = document.querySelectorAll(".slide");

const enlaces = document.querySelectorAll(".nav-link");

const abrirNutricion = document.getElementById("abrirNutricion");

const volverInicio = document.getElementById("volverInicio");

const navContacto = document.getElementById("navContacto");


// =================================
// MOSTRAR DIAPOSITIVAS
// =================================

function mostrar(numero) {

    // OCULTAR TODAS LAS DIAPOSITIVAS

    diapositivas.forEach(slide => {
        slide.classList.remove("activa");
    });

    // QUITAR COLOR ACTIVO DEL MENÚ

    enlaces.forEach(enlace => {
        enlace.classList.remove("activo");
    });

    // MOSTRAR LA DIAPOSITIVA SELECCIONADA

    diapositivas[numero].classList.add("activa");

    // ACTIVAR EL ENLACE SELECCIONADO

    enlaces[numero].classList.add("activo");

}


// =================================
// MENÚ PRINCIPAL
// =================================

enlaces.forEach(enlace => {

    enlace.addEventListener("click", function(event) {

        event.preventDefault();

        // CERRAR NUTRICIÓN

        document.body.classList.remove("modo-nutricion");

        // OBTENER NÚMERO DE DIAPOSITIVA

        const numero = Number(this.dataset.slide);

        // MOSTRAR DIAPOSITIVA

        mostrar(numero);

        // SUBIR AL INICIO

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


// =================================
// ABRIR APARTADO DE NUTRICIÓN
// =================================

abrirNutricion.addEventListener("click", function(event) {

    event.preventDefault();

    document.body.classList.add("modo-nutricion");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =================================
// VOLVER AL INICIO
// =================================

volverInicio.addEventListener("click", function() {

    // CERRAR APARTADO DE NUTRICIÓN

    document.body.classList.remove("modo-nutricion");

    // MOSTRAR PRIMERA DIAPOSITIVA

    mostrar(0);

    // SUBIR AL INICIO

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =================================
// BOTÓN CONTACTO
// =================================

navContacto.addEventListener("click", function() {

    // CERRAR NUTRICIÓN

    document.body.classList.remove("modo-nutricion");

    // PERMITIR QUE APAREZCA EL PIE DE PÁGINA

});