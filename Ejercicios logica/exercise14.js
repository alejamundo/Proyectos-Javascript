/**
 * A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente información:

Número de enlaces de la página
Dirección a la que enlaza el penúltimo enlace
Numero de enlaces que enlazan a http://prueba
Número de enlaces del tercer párrafo
 */
console.log(document.links.length);
console.log(document.links[document.links.length -1].href)
console.log(document.querySelectorAll('a[href="/"]').length);
