//-1 creación de la clase padre persona
class Persona {
    //-2 creación de una variable statica que mantienen un dato estatico para la clase
    static contadorPersona = 0;
    //-3 contructor que inicializa valores de la clase persona
    constructor(nombre, apellido, edad) {
        //-4 creo un id unico para cada persona con la variale estatica que umentara de 1 en 1 cada que se llame al contructor
        this._idPersona = Persona.contadorPersona++;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    //-5 getter and setter
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get edad(){
        return this._edad;
    }
    
    set nombre(nombre){
        this._nombre=nombre;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    set edad(edad){
        this._edad=edad;
    }
    toString(){
        return `${this.idPersona}: ${this.nombre} ${this.apellido} - ${this.edad} años`
    }
}

//1- creación de la clase hija empleado que extiende de la clase padre Person
class Empleado extends Persona{
    static contadorEmpleado=0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado=Empleado.contadorEmpleado++;
        this._sueldo=sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo=sueldo;
    }
    toString(){
        return `${this.idEmpleado}: ${super.toString()} gana --> ${this.sueldo}`
    }
}

//creación de la clase cliente
class Cliente extends Persona{
    static contadorCliente=0;
    constructor(nombre,apellido,edad){
        super(nombre,apellido,edad);
        this._idCliente=Cliente.contadorCliente++;
        this._fecha=new Date();
    }
    get idCliente(){
        return this._idCliente;
    }
    get fecha(){
        return this._fecha;
    }

    toString(){
        return `${super.toString()} ${this.idCliente} ${this.fecha}`
    }
}

//pruebas

//personas
const p1=new Persona('Alejandra','Orrego',30);
const p2=new Persona('Linda','Higuita',28);
const p3=new Persona('Yessica','Orrego',24);
const p4=new Persona('Julian','Higuita',16);
//Empleados
const e1=new Empleado(p1.nombre,p1.apellido,p1.edad,4);
const e2=new Empleado(p2.nombre,p2.apellido,p2.edad,10);

//Clientes
const c1=new Cliente(p3.nombre,p3.apellido,p3.edad);
const c2=new Cliente(p4.nombre,p4.apellido,p4.edad);

//muestra de resultados
console.log(p1.toString());
console.log(p2.toString());
console.log(p3.toString());
console.log(p4.toString());

console.log(e1.toString());
console.log(e2.toString());

console.log(c1.toString());
console.log(c2.toString());