const cacheName = 'v1';
const cacheAssets = [
    'index.html',
    'style.css',
    '/img',
    'script.js'
];

// Call install event

self.addEventListener('install', (e) => {
    console.log('SW installed');
    e.waitUntil(
        caches
            .open(cacheName)
            .then((cache) => {
                console.log("caching files")
                cache.addAll(cacheAssets)
            })
            .then(() => {
                self.skipWaiting()
            })
    )
});

// Call activate event
self.addEventListener('activate', () => {
    console.log('activated')
})