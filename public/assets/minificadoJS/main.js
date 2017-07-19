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
    $("#valorInputNombre").keyup(validar3camposVIEW4);
    $("#valorInputClave6").keyup(validar3camposVIEW4);

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

var validar3camposVIEW4= function(){
    var valorInputNombre =$("#inputNombre").val();
    var valorInputMail =$("#inputMail").val();
    var valorInputClave6 =$("#inputClave6").val();
    var botonCrearCuenta= $("botonCrearCuenta");
    
    
    if(valorInputNombre != null && valorInputClave6.length == 6 /*meter condicional del mail*/  ){
       
       botonCrearCuenta.removeClass("disabled");
       }else{
       botonCrearCuenta.addClass("disabled");
       }
}
/*----------Fin Validaciones-----------*/


/*----------Inicio API------------*/



/*----------Fin API------------*/









$(document).ready(cargarPagina);
