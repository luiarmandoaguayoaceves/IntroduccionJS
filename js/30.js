const usuarioAutenticado = new Promise((resolve, reject) => {
   const auth = true;
   if(auth){
    resolve("Usuario autenticado");//El promise se cumple
   } else{
    reject("No autenticado");//El promise no se cumple
   }
});

console.log(usuarioAutenticado);