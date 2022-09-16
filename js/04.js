// String o cadena de texto
const producto = "Monitor de 20\"";//cadena
const producto2 = String ('Monitor 30"'); //Cadena implicita
const producto3 = new String ("Monitor 50 Pulgadas"); //Objeto
const producto4 = "Monitor HD"; 
const tweet = 'Aprendiendo JavasScript con el curso de Desarrollo Web Completo';


console.log(producto.length);//Numero de caracteres es una propiedad length
console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(typeof producto3);
console.log(producto4);


//IndexOf te dice en que posicion se encuentra ese dato
console.log(tweet.indexOf('JavasScript'));
console.log(producto2.indexOf('Tablet'));

//Includes (retorna true o false)
console.log(tweet.includes('JavasScript'));
console.log(tweet.includes('Tablet'));

