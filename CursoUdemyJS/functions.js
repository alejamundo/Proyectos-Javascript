//funciones anonimas
let x= function (a,b) {return a+b};
console.log(x(1,2));

//funciones self invoked
(function () {
    console.log('execute function');
})();//llamada a la función

//funciones como objetos
//saber cuantos argumentos tiene una function debemos estar dentro de la function 


//Funciones flecha

let sumar=(a=4,b=5)=>{
    
    console.log(arguments[0]);
    return a+b;
}
sumar(1,2);

//argumentos y parametros
let result=sumarTodo(5,4,13,10,9);
function sumarTodo() {
    let suma=0;
    for (let i = 0; i < arguments.length; i++) {
        suma+=arguments[i];
    }
    console.log(suma);
}