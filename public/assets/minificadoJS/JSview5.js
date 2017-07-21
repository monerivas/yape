var cargarPagina = function () {
    setInterval(pasarApagina6, 3000);
}


var pasarApagina6 = function () {
    location.href = "view6.html"
    console.log("entrando a funcion");
}


$(document).ready(cargarPagina);
