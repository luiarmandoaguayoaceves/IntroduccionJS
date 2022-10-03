//Objeto 
// 'use strict'//modo stricto que solo acepta buenas practicas
const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}
// Object.freeze(producto);//no permite agregar ni modificar tampoco hacer delete al objeto 
Object.seal(producto)//tambien lo bloquea el modificar o agregar en el objeto pero si permite modificar existente
producto.imagen = 'imagen.jpg';

// console.log(Object.isFrozen(producto));//me dice si el objeto que le mando esta congelado
console.log(Object.isSealed(producto));//me dice si esta bloqueado

console.log(producto)



//seal permite editar pero no eliminar ni agregar mientras que freeze no te permite hacer nada