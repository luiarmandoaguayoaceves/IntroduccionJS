//Array methods
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Televisor 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
];

//forEach Metodo para ver si existe Marzo pero con mas codigo
meses.forEach(function(mes){
    if (mes == 'Marzo') {
        console.log('Marzo si existe')
    }
});

//Includes metodo para ver si existe Marzo
let resultado = meses.includes('Marzo');

        //Some Para Arrays de Objetos **************IMPORTANTE*********


 resultado = carrito.some(function(producto){
     return producto.nombre === 'Celular'
 })



//LO MISMO QUE ARRIBA PERO CON ARROW 
resultado = carrito.some(producto => producto.nombre === 'Celular');


//Reduce  METODO PARA SUMAR 
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio;
},0)//0 es el valor inicial

//LO MISMO QUE ARRIBA PERO CON ARROW 
resultado = carrito.reduce((total, producto) => total + producto.precio,0);//0 es el valor inicial


//Filter para filtrar  con arrow function
resultado = carrito.filter(producto => producto.precio>400);

//Filtra todos los que no son celular
resultado = carrito.filter(producto => producto.nombre !== 'Celular');

console.table(resultado)