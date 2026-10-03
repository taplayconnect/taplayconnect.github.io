// Service worker minimal: hanya agar aplikasi bisa dipasang (PWA).
// Tidak menyimpan cache apa pun, jadi data selalu langsung dari server.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* biarkan jaringan menangani */ });
