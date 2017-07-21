/*Tengo todo mi código JS en un solo archivo pero para la pantalla tres(view3) es necesario crear un archivo nuevo de JS porque tiene dos funcionalidades que depeneden de que el documento este listo $(document).ready(cargarPagina); 1°que al cargar la pagina (sin dar click en ningun lugar, solo al cargar la pagina)en el document (en mi caso un span) se escriba el numero que el usuario agrego en la pantalla anterior y que fue guardado en localStorage.  2°Que a partir de que carga la pagina, si en menos de 21 segundos el usuario no ingresa el codigo de validacion que le fue dado en la pantalla2,  se debe actualizar ese codigo por medio de un nuevo POST al segundo endpoint de la API. A mi entender no puede haber más de un $(document).ready() en un archivo de JS, es decir que no se como hacer que en un mismo archivo JS se carguen dos HTMLs en distintos tiempos*/
var cargarPagina = function () {
    $("#botonContinuar").click(mostrarTelEnSpan);
    mostrarTelEnSpan();
    
    setInterval(codigo21seg, 21000);
}

var mostrarTelEnSpan= function(){
    $("#spanNumTel").html(localStorage.getItem("phone"));
}

$(document).ready(cargarPagina);