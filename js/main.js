
// =====================================
// SELECCIONAR ELEMENTOS
// =====================================

const diapositivas = document.querySelectorAll(".slide");
const enlaces = document.querySelectorAll(".nav-link");

// =====================================
// MOSTRAR DIAPOSITIVAS
// =====================================

function mostrar(numero) {

    diapositivas.forEach(function (slide) {
        slide.classList.remove("activa");
    });

    enlaces.forEach(function (enlace) {
        enlace.classList.remove("activo");
    });

    if (diapositivas[numero]) {
        diapositivas[numero].classList.add("activa");

        if (enlaces[numero]) {
            enlaces[numero].classList.add("activo");
        }
    }

}

// =====================================
// FUNCIONAMIENTO DEL MENÚ
// =====================================

enlaces.forEach(function (enlace) {

    enlace.addEventListener("click", function (event) {

        event.preventDefault();

        const numero = Number(this.dataset.slide);

        mostrar(numero);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});
