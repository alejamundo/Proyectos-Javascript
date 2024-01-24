//clase padre de la que heredan raton y teclado
class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada=tipoEntrada;
        this._marca=marca;
    }
    //getter and setter
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada=tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca=marca;
    }
}

//crear clases hijas raton y teclado
class Raton extends DispositivoEntrada{
    static contadorRatones=0;
    constructor(marca){  
        super('Raton',marca);
        this._idRaton=++Raton.contadorRatones;
    }
    toString(){
        return `idRaton: ${this._idRaton}, tipo: ${this.tipoEntrada}, Marca: ${this.marca}`;
    }
}
class Teclado extends DispositivoEntrada{
    static contadorTeclado=0;
    constructor(marca){ 
        super('Teclado',marca); 
        this._idTeclado=++Teclado.contadorTeclado;
    }
    toString(){
        return `idTeclado: ${this._idTeclado}, tipo: ${this.tipoEntrada}, Marca: ${this.marca}`;
    }
}

//clase Monitor 
class Monitor{
    static contadorMonito=0;
    constructor(marca,tam){
        this._idMonitor=++Monitor.contadorMonito;
        this._marca=marca;
        this._tam=tam;
    }
    //getter and setter
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca=marca;
    }
    get tam(){
        return this._marca;
    }
    set tam(tam){
        this._tam=tam;
    }
    toString(){
        return `idMonitor: ${this._idMonitor}: marca -- ${this._marca}, tamaño: ${this._tam}`
    }
}


//clase computadora la cual tiene relación de agregación con raton, monitor y teclado, esta clase depende de otras para existir

class Computadora{
    static contadorComputadora=0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputador=++Computadora.contadorComputadora;
        this._nombre=nombre;
        this._monitor=monitor;
        this._teclado=teclado;
        this._raton=raton;
    }
    //getters and setters
    get idComputadora(){
        return this._idComputador;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor=monitor;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado=teclado;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton=raton;
    }
    toString(){
        return `idComputadora: ${this._idComputador}, Nombre: ${this._nombre}\nAccesorios\nMonitor: ${this._monitor.toString()}\nTeclado: ${this._teclado.toString()}\nRaton: ${this._raton.toString()} `
    }
}

class Orden{
    static contadorOrdenes=0;
    constructor(pc){
        this._idOrden=++Orden.contadorOrdenes;
        this._computadoras=[];
        this._computadoras.push(pc);
    }
    mostrar(){
        let ordenComputadoras='';
        for (const pc of this._computadoras) {
            ordenComputadoras+='\n{ '+pc.toString()+'}';
        }
        return `idOrden: ${this._idOrden}, Computadoras: ${ordenComputadoras}`
    }
}
//pruebas
let r1=new Raton('Genius');
let t1=new Teclado('HP');
let r2=new Raton('Consmo');
let t2=new Teclado('Gamer');

// console.log(r1.toString());
// console.log(t1.toString());
// console.log(r2.toString());
// console.log(t2.toString());

let m1=new Monitor('HP','Mediano');
// console.log(m1.toString());

let c1=new Computadora('Acer NW',m1,t1,r1);

let c2=new Computadora('Acer NW',m1,t2,r2);
// console.log(c1.toString());
let o1=new Orden(c1);
let o2=new Orden(c2);
console.log(o1.mostrar());
console.log('**************');
console.log(o2.mostrar());
