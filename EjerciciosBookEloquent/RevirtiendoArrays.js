/**
 Los arrays tienen un método reverse que cambia al array invirtiendo el orden
en que aparecen sus elementos. Para este ejercicio, escribe dos funciones,
revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, toma
un array como argumento y produce un nuevo array que tiene los mismos elementos
pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace lo
que hace el métodoreverse: modifica el array dado como argumento invirtiendo
sus elementos. Ninguno de los dos puede usar el método reverse estándar.
Pensando en las notas acerca de los efectos secundarios y las funciones puras
en el capítulo anterior, qué variante esperas que sea útil en más situaciones?
Cuál corre más rápido?
 */
function revertirArray(arrayOrigin) {
    let arryRevertido=[];
    let j=0;
    for (let i = arrayOrigin.length; i >=0 ; i--) {
        arryRevertido[j]=arrayOrigin[i];
        j++;
    }
    return arryRevertido;
}
function revertirArrayEnSuLugar(arrayrevertido) {
    let arrayOrigin=[];
    let j=0;
    console.log('revierte')
    for (let i = arrayrevertido.length; i >=0 ; i--) {
        arrayOrigin[j]=arrayrevertido[i];
        j++;
    }
    return arrayOrigin;
}
const arrayOriginal=[1,2,3,4,5,6,7,8,9,10];
const arrayRevertido=revertirArray(arrayOriginal);
const arrayVueltaLugar=revertirArrayEnSuLugar(arrayRevertido);
console.log('Array original: '+arrayOriginal)
console.log('Array revertido: '+arrayRevertido)
console.log('Array Vueta a Lugar: '+arrayVueltaLugar);