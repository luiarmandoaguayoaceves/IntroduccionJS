//consulta a una API mayormente usada

const usuarioAutenticado = new Promise((resolve, reject) => {
   const auth = true;
   if(auth){
    resolve("Usuario autenticado");//El promise se cumple
   } else{
    reject("No autenticado");//El promise no se cumple
   }
});

//imprimir resultado del objeto usuarioAutenticado 
usuarioAutenticado
.then(resultado => console.log(resultado))
.catch(error => console.log(error));


/*Existen 3 valores*
pendding: no se a cumplido pero tampoco rechazado
fulfilled: ya se cumplio
rejected: no se pudo cumplir
*/

