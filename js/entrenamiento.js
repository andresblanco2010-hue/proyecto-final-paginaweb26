
// =====================================
// APARTADO DE ENTRENAMIENTO
// =====================================

const btnEntrenamiento = document.getElementById("abrirEntrenamiento");

const apartadoEntrenamiento = document.getElementById("apartadoEntrenamiento");

const apartadoNutricion = document.getElementById("apartadoNutricion");

const servicios = document.querySelector(".servicios");

const footer = document.querySelector("footer");

const slides = document.querySelectorAll(".slide");

const main = document.querySelector("main");

const btnVolverEntrenamiento = document.getElementById("volverEntrenamientoInicio");


// ABRIR ENTRENAMIENTO

if (btnEntrenamiento) {

    btnEntrenamiento.addEventListener("click", function(e) {

        e.preventDefault();

        // Ocultar las diapositivas
        slides.forEach(function(slide) {
            slide.style.display = "none";
        });

        // Ocultar nutrición
        if (apartadoNutricion) {
            apartadoNutricion.style.display = "none";
        }

        // Ocultar servicios
        if (servicios) {
            servicios.style.display = "none";
        }

        // Ocultar pie de página
        if (footer) {
            footer.style.display = "none";
        }

        // Mostrar entrenamiento
        apartadoEntrenamiento.style.display = "block";

        // Desplazarse a entrenamiento
        apartadoEntrenamiento.scrollIntoView({
            behavior: "smooth"
        });

    });

}



        // Restaurar todas las diapositivas
        slides.forEach(function(slide) {
            slide.style.display = "";
            slide.classList.remove("activa");
        });

        // Mostrar inicio
        const inicio = document.getElementById("inicio");

        if (inicio) {
            inicio.classList.add("activa");
        }

