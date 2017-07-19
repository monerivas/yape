
var cargarPagina = function () {
    //Esta funcion inicializa el carousel de materialize
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });    
    /*validarTelefono();*/
    
    /*Si llamo la pura funcion y la inicializo no lo reconoce por lo tanto
    desencadeno la funcion con un evento, en ambos elementos HTML para que se ejecute en ambos*/
    $("#inputTelefono").keyup(validarTelefono);
    $("#filled-in-box").change(validarTelefono);
    

};

//si el lengt es diferente de cero y si es igual a 10
/*Validaciones*/
var validarTelefono = function () {
    var botonContinuar = $("#botonContinuar");
    var valorInputTelefono = $("#inputTelefono").val();
    var checkBoxTerminos = $("#filled-in-box");

    if (valorInputTelefono.length == 10 && checkBoxTerminos.prop("checked")) {
        botonContinuar.removeClass("disabled");
    } else {
        botonContinuar.addClass("disabled");
    }
}

$(document).ready(cargarPagina);
