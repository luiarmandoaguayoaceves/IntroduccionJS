//Classes

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return`El producto ${this.nombre} tiene un precio de: ${this.precio}`
    }
    retornarPrecio(){
        return`El precio es: $ ${this.precio}`
    }
    obtenerPrecio(){
        console.log(this.precio);
    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, true);//instancias por el new ("Argumentos")
const producto3 = new Producto('Laptop', 300, true);


//Herencia
class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto(){
        return`${super.formatearProducto()} y su isbn es: ${this.isbn}`
    }
}

const libro = new Libro('javascript la Revolucion', 120, 684219843467);

console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());