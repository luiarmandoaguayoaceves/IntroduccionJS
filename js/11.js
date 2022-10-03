const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

// const precioProducto = producto.precio
// const nombreProducto = producto.nombreProducto

// console.log(precioProducto)
// console.log(nombreProducto)


// Destructuring 
// const {nombreProducto} = producto;
const {precio, nombreProducto} = producto;

console.log(precio)
console.log(nombreProducto)
