//POO

/*Object Literal*/

const producto = {
    nombre: 'tablet',
    precio: 500
}
function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function(){
    return`El cliente ${this.nombre}${this.apellido}`
}

const cliente = new Cliente ('Armando', ' Aguayo');

console.log(cliente.formatearCliente())



/***************************************************************************************** */



/*Object Constructor **** Forma que van a atener los datos *****/
function Producto(nombre, precio, disponible){//parametros
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

/*Prototypes Clase . prototype . nombreDelMetodo = function 
Funciones que se usan el tipo de dato Producto*/
Producto.prototype.formatearProducto = function(){
    return`El producto ${this.nombre} tiene un precio de: ${this.precio}`
}


const producto2 = new Producto('Monitor Curvo de 49"', 800, true);//instancias por el new ("Argumentos")
const producto3 = new Producto('Laptop', 300, true);
const producto4 = new Producto('Celular', 1300, false);
const producto5 = new Producto('Tablet', 2300, false);



// function formatearProducto(producto){
//     return`El producto ${producto.nombre} tiene un precio de: ${producto.precio}`
// }

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto4);
console.log(producto5);


