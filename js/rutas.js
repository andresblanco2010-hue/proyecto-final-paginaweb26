
const RUTAS = {
    inicio: "index.html",
    entrenamiento: "page/entrenamiento.html",
    nutricion: "page/nutricion.html",
    deporte: "page/deporte.html",
    salud: "page/salud.html",
    contacto: "page/contactame.html"
};

const base = new URL("../", document.currentScript.src);

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll("[data-ruta]").forEach(function (enlace) {

        const nombre = enlace.dataset.ruta;

        if (RUTAS[nombre]) {
            enlace.href = new URL(RUTAS[nombre], base).href;
        }

    });

});

function irA(nombre) {

    if (RUTAS[nombre]) {
        window.location.href = new URL(RUTAS[nombre], base).href;
    }

}

window.RUTAS = RUTAS;
window.irA = irA;
