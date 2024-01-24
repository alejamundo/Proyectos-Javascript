/*
El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en 

--obtener el resto de la división entera del número de DNI y el número 23. 
--A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.

El array de letras es:

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

--Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño script que:

--Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado.

--En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.

--Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.

--Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.
*/

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let letra='';
let numeros=0;
let resto=0;
let letracalculo='';
const DNI=prompt('Ingrese el DNI');

//validar que el dni sea correcto

//-1 que el tamaño se correcto
if(DNI.length===9){
    //-2 valido que el ultimo dijito del DNi sea una letra
    letra=DNI.charAt(8).toUpperCase();
    if (/^[a-zA-Z]$/.test(letra)) {
        console.log('Letra correcta')
        //-3 valido que los numeros sean correctos
        numeros=DNI.slice(0,-1);
        if (/^[0-9]+$/.test(numeros)) {
            //-4 realizo operación para sacar el resto
            resto=numeros%23;
            //-5 calculo a que letra le pertenece ese resto
            letracalculo=letras[resto];
            //-6 se muetsra al usuario si a ingresado la letra de DNI correcta
            if(letracalculo===letra){
                console.log('El número y la letra de DNI son correctos')
            }else{
                console.log('La letra que ha indicado no es correcta')
            }
        }else{
            console.log('Los primeros 8 dijitos deben ser numericos')
        }
       
    }else{
        console.log('El DNI ingresado no es correcto verifique que el ultimo djito sea una letra')
    }
    console.log(letra)
}else{
    console.log('El DNI no esta correcto debe tener 9 dijitos')
}