//Classes

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;

    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, true);//instancias por el new ("Argumentos")
const producto3 = new Producto('Laptop', 300, true);

console.log(producto2);
console.log(producto3)