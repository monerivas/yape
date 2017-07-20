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
    $("#inputCodigoTelefono").keyup(validarCodigoDelTelefono);

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

/*Esta funcion se activa en la pantalla 3 y valida el codigo que el usuario recibe al ingresar tu telefono en la tantalla2*/
var validarCodigoDelTelefono = function () {
    var valorInputCodigoTelefono = $("#inputCodigoTelefono").val();//obtengo el valor de ese input
    var code = localStorage.getItem("code");//obtiene la propiedad code y su valor del localStorage que guarde cuando hago el primer post a la API

    if (valorInputCodigoTelefono.length == code.length) {
        if (valorInputCodigoTelefono == code) {
            console.log("Ya se valida la longitud del codigo");
            location.href = "view4.html"
        } else {
            alert("El código no coincide. Ingresa el código correcto")
        }
    }

}
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
    }, function (response) {
        console.log(response.data.code);
        /*Guardo en localStorage (que es como una cookie) 
                el primer parametro que es el nombre de la data
                y el segundo parametro que es la data que quiero que guarde. como propiedad de un objeto y su valor.*/
        localStorage.setItem("phone", response.data.phone);
        localStorage.setItem("code", response.data.code);
        localStorage.setItem("terms", response.data.terms);
        alert("Este es tu codigo de validación " + localStorage.getItem("code"));
        console.log("Este es tu codigo de validación " + localStorage.getItem("code"));
    });

};
/*----------Fin API------------*/









$(document).ready(cargarPagina);
