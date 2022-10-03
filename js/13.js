const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medida: '1m',
}

const nuevoProducto = {...producto, ...medidas}//concatena las propiedades de dos objetos
console.log(nuevoProducto)