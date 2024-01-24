/**
Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:

Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar().
Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().
Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.
 */

class Persona{
    constructor(nombre,edad,genero){
        this.nombre=nombre;
        this.edad=edad;
        this.genero=genero;
    }
    obtDetalles() {
        console.log('El nombre es: '+this.nombre);
        console.log('La edad es: '+this.edad);
        console.log('El genero es: '+this.genero);

    }
}

class Estudante extends Persona{
    constructor(nombre, edad, genero,curso,grupo){
        super(nombre,edad,genero);
        this.curso=curso;
        this.grupo=grupo;
    }
    registrar(){
        console.log('Registrado en el curso: '+this.curso+' en el grupo: '+this.grupo);
    }
}
class Profesor extends Persona{
    constructor(nombre, edad, genero,asignatura,nivel){
        super(nombre,edad,genero);
        this.asignatura=asignatura;
        this.nivel=nivel;
    }
    asignar(){
        console.log('Se le asignaron la asignatura: '+this.asignatura+' en el nivel: '+this.nivel);
    }
}

//casos de prueba
//1- creo un estudante y un profesor
const alumno1=new Estudante('Alejandra',30,'F','Software','001');
const alumno2=new Estudante('Linda',28,'F','Business','002');

const teacher1=new Profesor('Francisco',66,'M','Formación avanzada','Especialiazación');

alumno1.registrar();
alumno2.registrar();
teacher1.asignar();