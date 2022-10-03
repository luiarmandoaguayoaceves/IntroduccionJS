//Metodos de propiedad
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el ID: ${id}`)
    },
    pausar: function(id=0){
        console.log(`Cancion ${id} detenida!!`)
    },
    crearPlaylist: function(nombre){
        console.log(`Creando Playlist ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo Playlist ${nombre}`)
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion ${id}`)
}

reproductor.reproducir(3840)
reproductor.pausar(15)
reproductor.borrarCancion(35)
reproductor.crearPlaylist("Porta")
reproductor.reproducirPlaylist("Porta")