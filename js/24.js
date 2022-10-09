//for loop

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (let i = 1; i <= 100; i++) {
//     if( i % 2 === 0){
//         console.log(`Es par${i}`)
//     }else{
//         console.log(`Es impar ${i}`)
//     }
// }

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

for(let i = 0; i< carrito.length; i++){
    console.log( carrito[i].nombre );
}

//while loop 

// let i = 1;

// while(i <= 100){//condicion 
//     if (i % 2 === 0) {
//         console.log(`El valor ${i} es PAR`)
//     }else{
//         console.log(`El valor ${i} es IMPAR`);
//     }
//     i++;//incremento
// }


//Do while loop

let i = 11;
do{
    console.log(i)
    i++;
}while(i < 10)