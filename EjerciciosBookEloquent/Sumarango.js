/**
La introducción de este libro aludía a lo siguiente como una buena forma de
calcular la suma de un rango de números:
console.log(suma(rango(1, 10)));
Escribe una función rango que tome dos argumentos, inicio y final, y
retorne un array que contenga todos los números desde inicio hasta (e incluyendo)
final.
Luego, escribe una función suma que tome un array de números y retorne
la suma de estos números. Ejecuta el programa de ejemplo y ve si realmente
retorna 55.
Como una misión extra, modifica tu función rango para tomar un tercer
argumento opcional que indique el valor de “paso” utilizado para cuando construyas
el array. Si no se da ningún paso, los elementos suben en incrementos
de uno, correspondiedo al comportamiento anterior. La llamada a la función
rango(1, 10, 2) deberia retornar [1, 3, 5, 7, 9]. Asegúrate de que también
funcione con valores de pasos negativos para que rango(5, 2, -1) produzca
[5, 4, 3, 2].
*/
const arrayRango = [];
let j = 0;
function rango(start, end, step = 1) {
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arrayRango[j] = i;
      j++;
    }
  } else {
    //pasar un numero negativo a spositovo
    let stepPositive = Math.abs(step);
    for (let i = start; i >= end; i -= stepPositive) {
      arrayRango[j] = i;
      j++;
    }
  }

  return arrayRango;
}
console.log(rango(5, 2, -1));

function suma(array) {
  let sum = 0;
  for (const item of array) {
    sum += item;
  }
  return sum;
}

console.log(suma(rango(1, 10)));
