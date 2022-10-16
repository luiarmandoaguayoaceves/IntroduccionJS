async function obtenerEmpleados(){

    const archivo = '/js/empleados.json';

//     fetch(archivo)
//         .then(resultado => resultado.json())//resultado es json )
//         .then(datos => {
//             //console.log(datos);//imprime el dato 

//             const {empleados} = datos;
//             // console.log(empleados)
//             empleados.forEach(empleados =>{
//                 console.log(empleados)
//                 // console.log(empleados.id)
//                 // console.log(empleados.nombre)
//                 // console.log(empleados.puesto)

//                 // document.querySelector('.contenido').textContent = empleados.nombre;
//             })
//         })

const resultado = await fetch(archivo);
const datos = await resultado.json();
console.log(datos.empleados)
 }


obtenerEmpleados();