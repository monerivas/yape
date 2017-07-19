var cargarPagina = function () {
    //Esta funcion inicializa el carousel de materialize
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    /*validarTelefono();*/

    /*Si llamo la pura funcion y la inicializo no lo reconoce por lo tanto
    desencadeno la funcion con un evento, en ambos elementos HTML para que se ejecute en ambos*/
    $("#inputTelefono").keyup(validarTelefonoVIEW2);
    $("#filled-in-box").change(validarTelefonoVIEW2);
    /*$("#botonContinuar").click(hacerPostAPI);*/
};

/*----------Inicio Validaciones-----------*/
var validarTelefonoVIEW2 = function () {
    var botonContinuar = $("#botonContinuar");
    var valorInputTelefono = $("#inputTelefono").val();
    var checkBoxTerminos = $("#filled-in-box");

    if (valorInputTelefono.length == 10 && checkBoxTerminos.prop("checked")) {
        botonContinuar.removeClass("disabled");
    } else {
        botonContinuar.addClass("disabled");
    }
}
/*----------Fin Validaciones-----------*/


/*----------Inicio API------------*/



/*----------Fin API------------*/









$(document).ready(cargarPagina);
