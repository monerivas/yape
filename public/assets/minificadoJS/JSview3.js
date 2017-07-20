
var cargarPagina = function () {
    $("#botonContinuar").click(mostrarTelEnSpan);
}

var mostrarTelEnSpan= function(){
    $("#spanNumTel").html(localStorage.getItem("phone"));
    console.log("valorInputTelDeLocalStorage");
}

$(document).ready(mostrarTelEnSpan);