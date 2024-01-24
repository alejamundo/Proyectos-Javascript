/**
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 */

function Pares(num) {
    if (num%2==0) {
        console.log(' el numero es Par')
    }else{
        console.log('el Numero es impar')
    }
}
const n=prompt('Ingresa un numero');
Pares(parseInt(n))