/**
Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, 
es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
*/

function palindromo(text) {
  //-1 hacer que la cadena se reverse

  const arrayReverse = text.replace(/\s/g, '').split("").reverse().join("").toLowerCase();
  //-2 comparar la cadena original con la reversada para saber si son iguales
  for (let i = 0; i < text.length; i++) {
    if (text.replace(/\s/g, '').toLowerCase().charAt(i) === arrayReverse.charAt(i)) {
      console.log("El texto es palindrome");
    } else {
      console.log("El texto no es palindrome");
      return
    }
  }
  console.log('Texto original: '+text.toLowerCase());
  console.log('Texto reversado: '+arrayReverse);
}
palindromo("La ruta nos aporto otro paso natural");
