
/* =====================================
   GYM SUPPLEMENTS - DEPORTE
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    // SECCIONES QUE TENDRÁN ANIMACIÓN
    const secciones = document.querySelectorAll(
        ".informacion-deporte, .entrenamientos, .imagen-fitness, .consejos, .frase-final"
    );

    // COMPROBAR SI EL NAVEGADOR PERMITE ANIMACIONES
    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver(
            function (entradas, observador) {

                entradas.forEach(function (entrada) {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add("mostrar");

                        observador.unobserve(entrada.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        secciones.forEach(function (seccion) {

            seccion.classList.add("revelar");

            observador.observe(seccion);

        });

    }


    // DESPLAZAMIENTO SUAVE
    document.querySelectorAll('a[href^="#"]').forEach(function (enlace) {

        enlace.addEventListener("click", function (evento) {

            const destino = enlace.getAttribute("href");

            if (destino && destino.length > 1) {

                const elemento = document.querySelector(destino);

                if (elemento) {

                    evento.preventDefault();

                    elemento.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });

});
