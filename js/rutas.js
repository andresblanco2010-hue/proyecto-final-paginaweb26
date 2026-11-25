
// =====================================
// GYM SUPPLEMENTS
// SISTEMA DE RUTAS
// COMPATIBLE CON LIVE SERVER
// =====================================


// =====================================
// RUTAS DEL PROYECTO
// =====================================

const RUTAS = {

    inicio: "index.html",

    entrenamiento: "page/entrenamiento.html",

    deporte: "page/deporte.html",

    nutricion: "index.html",

    salud: "page/salud.html",

    contacto: "page/contactame.html"

};


// =====================================
// CONFIGURAR LOS ENLACES
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const enlaces = document.querySelectorAll("[data-ruta]");

    enlaces.forEach(function (enlace) {

        const nombreRuta = enlace.getAttribute("data-ruta");

        if (RUTAS[nombreRuta]) {

            enlace.href = RUTAS[nombreRuta];

        } else {

            console.warn("Ruta no encontrada: " + nombreRuta);

        }

    });

});


// =====================================
// FUNCIÓN PARA CAMBIAR DE PÁGINA
// =====================================

function irA(nombreRuta) {

    if (RUTAS[nombreRuta]) {

        window.location.href = RUTAS[nombreRuta];

    } else {

        console.error("No existe la ruta: " + nombreRuta);

    }

}


// =====================================
// DISPONIBILIZAR FUNCIONES
// =====================================

window.RUTAS = RUTAS;

window.irA = irA;
