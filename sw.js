self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('Barbearia').then(function(cache) {
            return cache.addAll([
                'index.html',
                'css/style.css'
            ]);
        })
    );
});