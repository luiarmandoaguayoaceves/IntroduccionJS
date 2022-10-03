//Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];
// console.log(numeros);

//constructor
//const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');


// const arreglo = ["Hola", 10, true, "si", null, {nombre: "juan", trabajo: "programador"}, [1, 2, 3,]];
// console.table(arreglo)

//Aceder a los valores del arreglo
// console.log(numeros[4])
// console.log(numeros[2])

//Conocer la extension de un arreglo 
// console.log(meses.length)

//iterador para todos los elementos del array
// numeros.forEach(function(numero){
//     console.log(numero)
// })

numeros[5] = 60;
// numeros[6] = 70;
// numeros.push(60)//agrega al final 
numeros.push(60, 70, 80)//agrega al final 

numeros.unshift(7, 8, 9)//agrega al inicio

console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
//  meses.pop();//elimina el ultimo elemento del array
//  meses.shift();//elimina el primer elemento

// meses.splice(2, 1);
// console.table(meses)

//Rest Operator o Spread Operator
// const nuevoArreglo = ['Junio', ...meses] agregarlo al inicio
const nuevoArreglo = [...meses, 'Junio']//agregarlo al final

console.table(nuevoArreglo)