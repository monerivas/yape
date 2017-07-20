var cargarPagina = function () {
    //Esta funcion inicializa el carousel de materialize
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    /*validarTelefono();*/

    /*Si llamo la pura funcion y la inicializo no lo reconoce por lo tanto
    desencadeno la funcion con un evento, en ambos elementos HTML para que se ejecute en ambos*/
    $("#filled-in-box").change(validarTelefonoVIEW2);
    $("#inputTelefono").keyup(validarTelefonoVIEW2);

    /* $("#inputNombre").keyup(validar3camposVIEW4);
     $("#inputClave6").keyup(validar3camposVIEW4);*/

    $("#botonContinuar").click(hacerPostAPI);
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

/*var validar3camposVIEW4 = function () {
    var valorInputNombre = $("#inputNombre").val();
    var valorInputMail = $("#inputMail").val();
    var valorInputClave6 = $("#inputClave6").val();
    var botonCrearCuenta = $("botonCrearCuenta");


    if (valorInputNombre.length => 1 && valorInputClave6.length == 6) {

        botonCrearCuenta.removeClass("disabled");
    } else {
        botonCrearCuenta.addClass("disabled");
    }
}*/
/*----------Fin Validaciones-----------*/


/*----------Inicio API------------*/
var api = {
    urlRegisterNumbers: "http://localhost:3000/api/registerNumber",
    urlResendCode: "http://localhost:3000/api/resendCode",

}

var hacerPostAPI = function () {
    //esto es para que el formulario no haga su accion por default que es enviar cosas
    var valorInputTelefono = $("#inputTelefono").val();
    $.post(api.urlRegisterNumbers, {
        "phone": valorInputTelefono,
        "terms": true
    },function (response) {
        console.log(response.data.code);
    });
};
/*----------Fin API------------*/









$(document).ready(cargarPagina);
