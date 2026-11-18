let actual = 0;

const diapositivas = document.querySelectorAll(".slide");

function mostrar(numero) {
    diapositivas.forEach(slide => {
        slide.classList.remove("activa");
    });

    diapositivas[actual].classList.add("activa");

    document.getElementById("numero").textContent =
        (actual + 1) + " / " + diapositivas.length;
}

function cambiar(direccion) {
    actual += direccion;

    if (actual >= diapositivas.length) {
        actual = 0;
    }

    if (actual < 0) {
        actual = diapositivas.length - 1;
    }

    mostrar(actual);
}