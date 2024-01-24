/**
 Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. Para determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador() proporcionada.
 */

// Función para obtener el tamaño de la ventana del navegador
function tamanoVentanaNavegador() {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return { ancho: w, alto: h };
}

// Función para determinar la zona de clic

document.getElementById('body').addEventListener('click', (e) => {
    var ventana = tamanoVentanaNavegador();
    var mitadAncho = ventana.ancho / 2;
    var mitadAlto = ventana.alto / 2;

    var mensaje = "Zona de clic: ";

    if (event.clientX < mitadAncho) {
        mensaje += "izquierda ";
    } else {
        mensaje += "derecha ";
    }

    if (event.clientY < mitadAlto) {
        mensaje += "arriba";
    } else {
        mensaje += "abajo";
    }

    alert(mensaje);
});

