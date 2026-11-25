
// EFECTO DE APARICIÓN DE LAS SECCIONES

document.addEventListener("DOMContentLoaded", function () {

    const secciones = document.querySelectorAll(
        ".seccion, .portada, .aviso-salud"
    );

    if (!("IntersectionObserver" in window)) return;

    const observador = new IntersectionObserver(
        function (entradas, observadorActual) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                    observadorActual.unobserve(entrada.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    secciones.forEach(function (seccion) {

        seccion.classList.add("revelar");

        observador.observe(seccion);

    });

});
