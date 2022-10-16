//Es un promise con el uso de la API de las notificaciones del navegador

const boton = document.querySelector('#boton');
boton.addEventListener('click', () =>{
    Notification.requestPermission()
    .then (resultado => console.log(`El resultado es: ${resultado}`))
});
 
if (Notification.permission == 'granted') {
    new Notification ('Esta es una notificacion',{
        icon: 'img/ccj.png',
        body: 'Codigo Con Juan, los mejores Tutoriales '
    })
}
