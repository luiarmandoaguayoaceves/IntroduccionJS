//Async /await

function descargarNuevosClientes(){
    return new Promise (resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout(() =>{
            resolve('Los clientes fueron descargados...');
        }, 4000);

    })
}

function descargarUltimosPedidos(){
    return new Promise (resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout(() =>{
            resolve('Los pedidos fueron descargados...');
        }, 1000);

    })
}

async function app(){
    try {
        // const clientes= await descargarNuevosClientes();
        // const pedidos= await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos() ])
        console.log(resultado[0])
        console.log(resultado[1])
    } catch (error) {
        console.log(error)
    }
    
}


app();

// console.log('Este codigo no se bloquea');

/*setTimeout lo hace despuede e 1000 que es 1 segundo */
// setTimeout(function(){
//     console.log('setTimeout.....')
// }, 1000);


/*setInterval lo hace continuamente cada ciertos segundos  1000 es un segundo */
// setInterval(function(){
//     console.log('setTimeout.....')
// }, 1000);