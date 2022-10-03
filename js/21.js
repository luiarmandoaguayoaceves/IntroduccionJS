//Arrow functions

const sumar2 = (n1, n2) => console.log(n1 + n2);//Solo cuando tienes una linea se puede borrar {}
sumar2(5, 10);

//Sintaxis de Arrow
const aprediendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);//con un 

aprediendo("Javascript");

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
meses.forEach(mes => {
    if (mes == 'Marzo') console.log('Marzo si existe')
});

let resultado
        //Some Para Arrays de Objetos **************IMPORTANTE*********
 resultado = carrito.some(producto => producto.nombre === 'Celular'); //Implisito el Return ejemplo 15 para ver primero vs mas compacto
 
 //Reduce  METODO PARA SUMAR 
 resultado = carrito.reduce((total, producto) => total + producto.precio, 0)//0 es el valor inicial
 
 //Filter para filtrar  con arrow function Mayoes de 400
 resultado = carrito.filter(producto => producto.precio>400);
 
 //Filtra todos los que no son celular
 resultado = carrito.filter(producto => producto.nombre !== 'Celular');
 
 console.log(resultado)