const nombreCache = 'apv-v1';

const archivos = [
    "/",
    "index.html",
    "./css/bootstrap.css",
    "./css/styles.css",
    "./js/app.js",
    "./js/apv.js",
  ];

// Cuando se instala el service worker, se ejecuta solo una vez
self.addEventListener('install', e => {
    console.log('Instalado el service worker');

    // Cacheamos
    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('cacheando...');
                cache.addAll(archivos)
            })
    )
});


// Activar el service Worker
self.addEventListener('activate', e => {
    console.log('Service worker Activado');

    console.log(e);
});


// Evento fetch para descargar archivos estáticos
self.addEventListener('fetch', e => {
    console.log('Fetch...', e)

    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                console.log('Tomando el caché')
                return respuestaCache;
            })
    )
})