self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('Barber').then(function(cache) {
            return cache.addAll([
                'index.html',
                'css/style.css'
            ]);
        })
    );
});