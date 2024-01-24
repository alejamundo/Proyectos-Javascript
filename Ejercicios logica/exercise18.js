/**
 Completar el código JavaScript proporcionado para que:

Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición del puntero respecto del navegador y respecto de la página:


Para mostrar los mensajes, utilizar la función muestraInformacion() deduciendo su funcionamiento a partir de su código fuente.

Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para indicar el nuevo evento y su información asociada:


Añadir la siguiente característica al script: cuando se pulsa un botón del ratón, el color de fondo del cuadro de mensaje debe ser amarillo (#FFFFCC) y cuando se pulsa una tecla, el color de fondo debe ser azul (#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve a ser blanco.

 */

const area=document.getElementById('area');
const btn=document.getElementById('changeColor');
area.addEventListener('mousemove',(e)=>{
    //obtengo coordenadas del raton respecto a textarea
    //obtengo coordenadas con respecto a pagina
    muestraInformacion(e.clientX,e.clientY,e.pageX,e.pageY);
    area.style.background='white';
    
});
function muestraInformacion(clientx,clienty,pagex,pagey) {
    console.log('Coordenada en x del textarea: '+clientx+' Coordenada en y del textarea: '+clienty);
    console.log('Coordenada en x de la page: '+pagex+' Coordenada en y de la page: '+pagey);
}
btn.addEventListener('click',()=>{
    area.style.background='#FFFFCC';
});

area.addEventListener('keydown',(e)=>{
    area.style.background='#CCE6FF';
})