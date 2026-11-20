
// =====================================
// SELECCIONAR ELEMENTOS
// =====================================

const diapositivas = document.querySelectorAll(".slide");

const enlaces = document.querySelectorAll(".nav-link");

const abrirNutricion = document.getElementById("abrirNutricion");

const volverInicio = document.getElementById("volverInicio");


// =====================================
// FUNCIÓN PARA MOSTRAR DIAPOSITIVAS
// =====================================

function mostrar(numero) {

    // OCULTAR TODAS LAS DIAPOSITIVAS

    diapositivas.forEach(slide => {
        slide.classList.remove("activa");
    });

    // QUITAR ESTADO ACTIVO DEL MENÚ

    enlaces.forEach(enlace => {
        enlace.classList.remove("activo");
    });

    // MOSTRAR LA DIAPOSITIVA SELECCIONADA

    if (diapositivas[numero]) {

        diapositivas[numero].classList.add("activa");

        enlaces[numero].classList.add("activo");

    }

}


// =====================================
// FUNCIONAMIENTO DEL MENÚ
// =====================================

enlaces.forEach(enlace => {

    enlace.addEventListener("click", function(event) {

        event.preventDefault();

        // CERRAR EL APARTADO DE NUTRICIÓN

        document.body.classList.remove("modo-nutricion");

        // OBTENER EL NÚMERO DE DIAPOSITIVA

        const numero = Number(this.dataset.slide);

        // MOSTRAR DIAPOSITIVA

        mostrar(numero);

        // SUBIR AL PRINCIPIO

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


// =====================================
// ABRIR APARTADO DE NUTRICIÓN
// =====================================

abrirNutricion.addEventListener("click", function(event) {

    event.preventDefault();

    // MOSTRAR NUTRICIÓN

    document.body.classList.add("modo-nutricion");

    // SUBIR AL PRINCIPIO

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =====================================
// VOLVER AL INICIO
// =====================================

volverInicio.addEventListener("click", function() {

    // CERRAR NUTRICIÓN

    document.body.classList.remove("modo-nutricion");

    // MOSTRAR PRIMERA DIAPOSITIVA

    mostrar(0);

    // SUBIR AL PRINCIPIO

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
