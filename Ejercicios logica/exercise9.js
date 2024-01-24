/**
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

function procesorText(text) {
    //-1 determinar si la cadena esta formada por letras
    if(/^[a-zA-Z]+$/.test(text)){
        //-2 determinar si las letras son todas mayusculas
        if(/^[a-z]+$/.test(text)){
            console.log('El texto esta formado solo por letras Minusculas');
        }else if(/^[A-Z]+$/.test(text)){
            console.log('El texto esta formado solo por letras Mayusculas');
        }else{
            console.log('El texto esta formado por letras mayusculas y minusculas');
        }

    }else{
        console.log('La cadena contienen numeros o caracteres especiales')
    }
}
procesorText('aLEJANDRA')