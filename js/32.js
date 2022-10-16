//Async /await

function descargarNuevosClientes(){
    return new Promise (resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout(() =>{
            resolve('Los clientes fueron descargados...');
        }, 1000);

    })
}

async function app(){
    try {
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
    } catch (error) {
        console.log(error)
    }
    
}


app();

console.log('Este codigo no se bloquea');

/*setTimeout lo hace despuede e 1000 que es 1 segundo */
// setTimeout(function(){
//     console.log('setTimeout.....')
// }, 1000);


/*setInterval lo hace continuamente cada ciertos segundos  1000 es un segundo */
// setInterval(function(){
//     console.log('setTimeout.....')
// }, 1000);