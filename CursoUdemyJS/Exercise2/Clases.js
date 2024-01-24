// Iniciamos con la clase que no tienen dependencia con otras
class Producto{
    static contadorProducto=0;
    constructor(nombre, precio){
        this._idProducto=++Producto.contadorProducto;
        this._nombre=nombre;
        this._precio=precio;
    }
    
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    set precio(precio){
        this._precio=precio;
    }
    toString(){
        return `id: ${this._idProducto}, nombre: ${this._nombre} --> precio $${this._precio}`;
    }
}
//esta clase tienne una relación de agregación con productos
class Orden{
    static contadorOrdenes=0;
    static get MAX_PRODUCTOS(){return 5}

    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._productos=[];
        //this._contadorProductosAgregados =0;  
    }

    agregarProducto(producto){
        //verificar que no supere el maximo
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }else{
            console.log('supero el maximo de productos')
        }
    }
    calcularTotal(){
        //sumar el precio de todos los productos que hay en la orden
        let total=0;
        for(let producto of this._productos){
            total+=producto.precio;
        }
        return total;
    }
    mostrarOrden(){
        let productosOrden='';
        for (let producto of this._productos) {
            productosOrden+= '\n{'+producto.toString()+'} ';
        }
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${productosOrden}`)
    }
}



class VentasTest{

}

//pueden existir sin la otra clase
let p1=new Producto('Pantalón', 300);
let p2=new Producto('Camisa', 100);


//necesita de producto para poder exitir relkación de agrgacion
let o1=new Orden();
o1.agregarProducto(p1);
o1.agregarProducto(p2);
o1.mostrarOrden();


let o2=new Orden();
o2.agregarProducto(new Producto('Buso',800));
o2.mostrarOrden();