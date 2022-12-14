const nombreCache = 'apv-v7';

const archivos = [
    "/",
    "index.html",
    "error.html",
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

   // Borrar la caché obsoleta
   e.waitUntil(
    caches.keys()
        .then(keys => {
            return Promise.all(
                console.log('Borrando cachés'),
                keys.filter( key => key !== nombreCache )
                .map( key => caches.delete(key)) // Borra las versiones anteriores
            )
        })
   )
});


// Evento fetch para descargar archivos estáticos
self.addEventListener('fetch', e => {
    console.log('Fetch...', e)

    e.respondWith(
        caches
          .match(e.request)
          .then(cacheResponse => (cacheResponse ? cacheResponse : caches.match('error.html')))
    )
})