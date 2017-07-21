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

    $("#inputNombre").keyup(validar3camposVIEW4);
    $("#inputMail").keyup(validar3camposVIEW4);
    $("#inputClave6").keyup(validar3camposVIEW4);

    $("#botonContinuar").click(hacer1erPostTelAPI); //En pantalla2 activacion de la funcion que hace
    $("#inputCodigoTelefono").keyup(validarCodigoDelTelefono);


    $("#botonCrearCuenta").click(hacer3erPostDe3camposAPI); //En pantalla4 activacion de la funcion que hace el 3 post a la API




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

var validar3camposVIEW4 = function () {
    console.log("si entra a la funcion")
    var valorInputNombre = $("#inputNombre").val();
    var valorInputMail = $("#inputMail").val();
    var valorInputClave6 = $("#inputClave6").val();
    var botonCrearCuenta = $("#botonCrearCuenta");


    if (valorInputNombre.length != 0 && valorInputMail.length != 0 && valorInputClave6.length == 6) {

        botonCrearCuenta.removeClass("disabled");
    } else {
        botonCrearCuenta.addClass("disabled");
    }
}


var validarCodigoDelTelefono = function () {
    /*Esta funcion se activa en la pantalla 3 y valida el codigo que el usuario recibe al ingresar tu telefono en la tantalla2*/
    var valorInputCodigoTelefono = $("#inputCodigoTelefono").val(); //obtengo el valor de ese input
    var code = localStorage.getItem("code"); //obtiene la propiedad code y su valor del localStorage que guarde cuando hago el primer post a la API

    //hago un primer if para validar la longitud tanto del input como del localStorage, porque sino cada que ingrese un caracter se lanza el alert
    if (valorInputCodigoTelefono.length == code.length) {
        //Este if valida el valor de ambas cosas (ya no la longitud) y si no son extrictamente iguales manda codigo de error
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
    urlCreateUser: "http://localhost:3000/api/createUser",

}

var hacer1erPostTelAPI = function () {
    //esto es para que el formulario no haga su accion por default que es enviar cosas
    var valorInputTelefono = $("#inputTelefono").val();
    $.post(api.urlRegisterNumbers, {
        "phone": valorInputTelefono,
        "terms": true
    }, function (response) {
        console.log(response.data.code);/*Estoy accediendo a la propiedad data.code del JSON que me respondio la API*/
        /*Guardo en localStorage (que es como una cookie pero que no conceta con el servidor, solo guarda data en el navegador) el primer parametro que es el nombre de la data
                y el segundo parametro que es la data que quiero que guarde. como propiedad de un objeto y su valor.*/
        localStorage.setItem("phone", response.data.phone);
        localStorage.setItem("code", response.data.code);
        localStorage.setItem("terms", response.data.terms);
        alert("Este es tu codigo de validación " + localStorage.getItem("code"));
        console.log("Este es tu codigo de validación " + localStorage.getItem("code"));
    });
};

var codigo21seg = function () {
    $.post(api.urlResendCode, { //hago un post a la url siguiente endpoint 
        "phone": localStorage.getItem("phone") /*En la linea 37 del arcgivo users.js de la API viene que para hacer un post a este endpoint (req) hay que enviar la propiedad phone (y su valor) al JSON. Le digo que a la propiedad phone le meta el valor que ya tenía guardado en localStorage porque no le debo volver a pedir al usuario el telefono(ademas de que eso me daria error porque ya esta registrado ese numero)*/
    }, function (response) {
        console.log(response); /*veo que respuesta me da la API, me da un JSON con dos propiedades phone y message*/
        localStorage.setItem("code", response.data); /*Sobre escribo la propiedad code del localStorage (con el valor de la propiedad data porque en este JSON de este endpoint el code no se llama code, como en el pasado, se llama data ) para invalidar el codigo anterior y que quede este nuevo guardado*/
        console.log(response.data); /*Hago console.log de como queda la propiedad data (con el valor de code)del JSON de este endpoint */
        /**/
        alert(response.data);
    });
}


var hacer3erPostDe3camposAPI = function (e) {
    /*Esta funcion se ejecuta en la pantalla4 (view4)*/
    
    e.preventDefault();/*Este prevenDefault es porque el boton que activa esta funcion esta dentro de un form y tiene un type submit por default, lo que hace que se recargue la pagina una y otra vez y yo no quiero eso, quiero que me mande a la siguiente pagina*/
   
    var valorInputNombre = $("#inputNombre").val();
    var valorInputMail = $("#inputMail").val();
    var valorInputClave6 = $("#inputClave6").val();
/*
    var botonCrearCuenta = $("#botonCrearCuenta");
*/
    $.post(api.urlCreateUser, { /*Basada en el router.post('/createUser') de la linea 64 del archivo users.js los requiests de este endpoint son las propiedades phone, name, email y password de su JSON. El response de este endpoint son las propiedades success, message, data se du JSON*/
        "phone": localStorage.getItem("phone"),
        "name": valorInputNombre,
        "email": valorInputMail,
        "password": valorInputClave6
    }, function (response) {
        console.log( response.success); 
        console.log( response.message); 
        console.log( response.data);
        if(response.success == true){
        location.href = "view5.html"
            console.log("funciina el IF");
           }
    });
};
/*----------Fin API------------*/









$(document).ready(cargarPagina);
