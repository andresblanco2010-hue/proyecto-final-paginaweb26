// =====================================
// SELECCIONAR ELEMENTOS
// =====================================

const diapositivas = document.querySelectorAll(".slide");

const enlaces = document.querySelectorAll(".nav-link");

const abrirNutricion = document.getElementById("abrirNutricion");

const volverInicio = document.getElementById("volverInicio");


// =====================================
// MOSTRAR DIAPOSITIVAS
// =====================================

function mostrar(numero) {

    // OCULTAR TODAS LAS DIAPOSITIVAS

    diapositivas.forEach(slide => {
        slide.classList.remove("activa");
    });

    // QUITAR COLOR ACTIVO DEL MENÚ

    enlaces.forEach(enlace => {
        enlace.classList.remove("activo");
    });

    // MOSTRAR LA DIAPOSITIVA ELEGIDA

    diapositivas[numero].classList.add("activa");

    // ACTIVAR EL ENLACE DEL MENÚ

    enlaces[numero].classList.add("activo");

}


// =====================================
// FUNCIONAMIENTO DEL MENÚ
// =====================================

enlaces.forEach(enlace => {

    enlace.addEventListener("click", function(event) {

        event.preventDefault();

        // CERRAR NUTRICIÓN

        document.body.classList.remove("modo-nutricion");

        // OBTENER DIAPOSITIVA

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


// =====================================
// ABRIR NUTRICIÓN
// =====================================

abrirNutricion.addEventListener("click", function(event) {

    event.preventDefault();

    document.body.classList.add("modo-nutricion");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =====================================
// VOLVER AL INICIO
// =====================================

volverInicio.addEventListener("click", function() {

    document.body.classList.remove("modo-nutricion");

    mostrar(0);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});