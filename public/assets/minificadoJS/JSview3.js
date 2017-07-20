
var cargarPagina = function () {
    $("#botonContinuar").click(mostrarTelEnSpan);
}

var mostrarTelEnSpan= function(){
    $("#spanNumTel").html(localStorage.getItem("phone"));
}

$(document).ready(mostrarTelEnSpan);