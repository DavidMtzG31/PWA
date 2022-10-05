// Revisar si nuestro navegador soporta service worker

if( 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then( registrado => console.log('Se instaló correctamente', registrado) ) 
        .catch( error => console.log('Falló la instanación', error) )

} else {
    console.log('Service Workers no soportados');
}