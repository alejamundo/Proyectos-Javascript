/*
A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];
*/

var valores = [true, 5, false, "hola", "adios", 2];

// 1. Determinar cuál de los dos elementos de texto es mayor según la suma de Unicode
const arrayText = [];
const sumaUnicode = [];

valores.forEach((valor) => {
    if (typeof valor === "string") {
        arrayText.push(valor);
    }
});

for (let i = 0; i < arrayText.length; i++) {
    let suma = 0;
    for (let j = 0; j < arrayText[i].length; j++) {
        suma += arrayText[i].charCodeAt(j);
    }
    sumaUnicode.push(suma);
}

let stringMayorIndex = 0;
for (let i = 0; i < sumaUnicode.length; i++) {
    if (sumaUnicode[i] > sumaUnicode[stringMayorIndex]) {
        stringMayorIndex = i;
    }
}

const textoMayor = arrayText[stringMayorIndex];
console.log('El texto con la mayor suma de códigos Unicode es: ' + textoMayor);

//2.Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
valores.forEach((valor) => {
    if (typeof valor === "boolean") {
        console.log(valor && true)
    }
});

//3.Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos

const arrayNumber=[];

valores.forEach((valor) => {
    if (typeof valor === "number") {
        arrayNumber.push(valor);
    }
});
console.log(arrayNumber[0]+arrayNumber[1]);
console.log(arrayNumber[0]-arrayNumber[1]);
console.log(arrayNumber[0]*arrayNumber[1]);
console.log(arrayNumber[0]/arrayNumber[1]);

