/*
    Escribe un programa que use console.log para imprimir todos los números de
    1 a 100, con dos excepciones.

    Para números divisibles por 3, imprime "Fizz" en lugar del número, 
    y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.

    Cuando tengas eso funcionando, modifica tu programa para imprimir "
    FizzBuzz", para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz"
    o "Buzz" para números divisibles por solo uno de ellos).
*/

//-1 escribir numeros del 1 al 100
for (let i = 1; i <= 100; i++) {
    //-2 evaluar numeros divisibles por 3 y 5 imprime FizzBuzz
    if(i%3===0 && i%5===0){
        console.log('FizzBuzz');
        //-3 evaluar numero divisible por 5 y no por 3
    }else if(!i%3===0 && i%5===0){
        console.log('Buzz');
        //-4 evaluar numero divisible por 3 y no por 5
    }else if (i%3===0 && !i%5===0) {
        console.log('Fizz');
        //-5 mostrar el numero ya que no tiene filtros 
    }else{
        console.log(i);
    } 

}