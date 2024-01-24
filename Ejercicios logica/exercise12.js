const sumas = [];
const repeticiones = {};

// Paso 1: Hacer que la misma operación se haga 36000 veces
for (let i = 0; i < 36000; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;
    
    // Paso 2: Almacenar en un array las sumas de cada tiro
    sumas.push(suma);

    // Paso 3: Almacenar las repeticiones de cada suma en un objeto
    if (repeticiones[suma]) {
        repeticiones[suma]++;
    } else {
        repeticiones[suma] = 1;
    }
    
}
console.log(repeticiones)

// Paso 4: Recorrer el objeto de repeticiones e imprimir los resultados
Object.keys(repeticiones).forEach(resultado => {
    console.log(`Suma ${resultado}: ${repeticiones[resultado]} repeticiones`);
});
