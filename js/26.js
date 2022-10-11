//This

const reservacion = {
    nombre:'Luis',
    apellido:'Aguayo',
    total: 500,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagare es de ${this.total}`)
    }
}
const reservacion2 = {
    nombre:'Armando',
    apellido:'Aguayo',
    total: 500,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagare es de ${this.total}`)
    }
}

reservacion.informacion();
reservacion2.informacion();