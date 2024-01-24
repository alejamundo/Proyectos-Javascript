//acceder apropiedades de objeto
let persona={
    nombre:'Aleja',
    apellido:'Orrego',
    get nombreCompleto(){ return this.nombre+' '+this.apellido},
    set apellidoC(apellido){this.apellido=apellido}
}
console.log(persona.nombre)
console.log(persona['apellido']);

//eliminar propiedad de un obj
delete persona.apellido;
console.log(persona);

//Imprimir objetos
for (propiedad in persona){
    console.log(propiedad)
}

//array con las propiedades
console.log(Object.values(persona))

//imprimir en cadena todo el objeto
console.log(JSON.stringify(persona));

//getter and setter en js
console.log(persona.nombre);
persona.apellidoC='Alejandra'
console.log(persona.nombreCompleto);


//agregar nuevas propiedades a un objeto tipo function
//Persona.prototype.tell='agrega esta propiedad al constrctos'


