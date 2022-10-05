// Cuando se instala el service worker, se ejecuta solo una vez
self.addEventListener('install', e => {
    console.log('Instalado el service worker');

    console.log(e);
});


// Activar el service Worker
self.addEventListener('activate', e => {
    console.log('Service worker Activado');

    console.log(e);
});


// Evento fetch para descargar archivos estáticos
self.addEventListener('fetch', e => {
    console.log('Fetch...', e)
})