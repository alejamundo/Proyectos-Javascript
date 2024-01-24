/*
El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120

Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
*/
const n = prompt("Ingresa un número");
let result = 0;
let total=0
//-1 valido que el dato ingresado sea un numero
if (/^[0-9]+$/.test(n)) {
  //-2 realizo el ciclo que ara la operación
  for (let i = n; i > 1; i--) {
    //-3 almaceno el primer resultado de la multipliucación
    if (result === 0) {
      result = i * (i - 1);
    } else {
        result=result*(i-1)
    }
  }
  console.log('El factorial del numero: '+n+' es el: '+result)
} else {
  console.log("Debe ingresar un número");
}
