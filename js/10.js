//Objetos

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

const {precio} = producto;//hace variable y almacena en ella el valor 


// console.log(producto.nombreProducto+ ' \"Con punto\"')//para tomar la propiedad se pone punto
// console.log(producto["nombreProducto"]+" \"con corchete\"")
// console.log(precio)

producto.imagen = 'imagen.jpg'//agregas propiedad al objeto 

delete producto.disponible;//elimina propiedad

console.log(producto)//imprime el objeto completo 