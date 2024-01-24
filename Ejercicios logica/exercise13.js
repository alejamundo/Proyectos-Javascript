/*
    Crear las expresiones regulares necesarias para resolver los siguientes puntos:
*/
//  1-Crear una expresión regular valide una fecha en formato "XX/XX/XXXX", donde "X" es un dígito. Probarlo con la expresión: "Nací el 05/04/1982 en Donostia.".
//validar con una expresión regular una fecha
//-1 sacar de la expresión dada la fecha
function validaFecha() {
    let expresion = 'Nací el 05/04/2032 en Donostia.';
    const arrayExpresion = expresion.split('');
    let arrayFecha = [];
    for (let i = 0; i < arrayExpresion.length; i++) {

        //-2 almacenar la fecha en una variable
        if (/^(\d*[0-9]\d*)$/.test(arrayExpresion[i])) {
            arrayFecha.push(parseInt(arrayExpresion[i]));

        } else if (arrayExpresion[i] === '/') {
            arrayFecha.push(arrayExpresion[i])
        }
    }

    //-3 convertir fecha en un a cadena
    let fecha = arrayFecha.join('');
    console.log(fecha);
    if (/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/.test(fecha)) {
        console.log('El formato de la fecha es correcto');
    } else {
        console.log('el formato de la fecha no es correcto')
    }

}
//  2-Crear una expresión regular que valide una dirección de email. Para simplificar, los valores antes de la @ pueden contener cualquier carácter alfanumérico, y los caracteres . y -, mientras que los valores tra la @ pueden contener caracteres alfanuméricos, y el tipo de dominio puede tener una longitud de 2 o 3 caracteres.
function validaEmail() {

    let email = 'higuta47@gmail.com';
    if (/^[\w.-]+@[\w-]+\.[a-zA-Z]{2,}$/.test(email)) {
        console.log('El correo es correcto');
    } else {
        console.log('El correo no es correcto')
    }
}

//    3-Dada la siguiente función que de reemplazo de caracteres, reescribirla utilizando expresiones regulares.
//con codigo
function escapeHTML(text) {
   
    var replacements = [["&", "&amp;"], ["\"", "&quot;"],
    ["<", "&lt;"], [">", "&gt;"]];

    //1-Recorrer el texto y buscar si coincide con parte 0 de el array de array
    let result='';
    for (let j = 0; j < text.length; j++) {
        let replaced=false;
        //2- recorrer el array con las palabras a reemplazar
        for (let i = 0; i < replacements.length; i++) {
            if (text[j]===replacements[i][0]) {
                result+=replacements[i][1];
                replaced=true;
                break;
            }   
        }
        if (!replaced) {
            result+=text[j];
        }
        
    }
    return result
}
//con expresiones regulares
function escapeHTML2(text) {
    // Verifica si el argumento "text" es de tipo cadena
    if (typeof text !== 'string') {
        // Si no es una cadena, simplemente devuelve el valor original
        return text;
    }

    // Utiliza el método replace con una expresión regular para buscar y reemplazar
    // los caracteres especiales & " < >
    return text.replace(/[&"<>]/g, function(match) {
        // La función de devolución de llamada retorna la entidad HTML correspondiente
        // para cada carácter especial encontrado en la cadena
        return {
            '&': '&amp;',    // Reemplaza & con &amp;
            '"': '&quot;',   // Reemplaza " con &quot;
            '<': '&lt;',     // Reemplaza < con &lt;
            '>': '&gt;'      // Reemplaza > con &gt;
        }[match];  // Usa el carácter encontrado como clave para obtener el valor de reemplazo
    });
}

//4-Dados un nombre y un apellido, crear la expresión regulatr necesaria para mostrarlos en orden inverso y separados por una coma. Por ejemplo, la cadena "John Smith", convertirla en "Smith, John".

let nombreCompleto='Alejandra Orrego';
//1-buscar expresion regular que invierta este nombre
let nombreInvertido= nombreCompleto.replace(/^(\w+)\s+(\w+)$/,'$2, $1');
// console.log(nombreInvertido);

//    5-Crear una expresión regular que elimine las etiquetas potencialmente peligrosas (<script>...</script>) y todo su contenido de una cadena HTML.
const html = '<p>This is <script>alert("dangerous script");</script> HTML content.</p>';
const regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
const contenidoSinScript = html.replace(regex, '');

console.log(contenidoSinScript);
