/**
 * Completar el código JavaScript proporcionado para que cuando se pulse sobre el enlace se muestre completo el contenido de texto. Además, el enlace debe dejar de mostrarse después de pulsarlo por primera vez. La acción de pulsar sobre un enlace forma parte de los "Eventos" de JavaScript que se ven en el siguiente capítulo. En este ejercicio, sólo se debe saber que al pinchar sobre el enlace, se ejecuta la función llamada muestra().
 */
//1- me traigo el evento cuando se presione en el enlace
const enlace = document.getElementById('mas');
const textInvisible= document.getElementById('invisible');
textInvisible.style.display='none';
enlace.addEventListener('click',mostrar);
function  mostrar() {
    //2- hacer visible el texto
    textInvisible.style.display='block';
    //3- eliminar el enlace 
    enlace.style.display='none';
}