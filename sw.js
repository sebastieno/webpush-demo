self.addEventListener('install', function (e) {
    console.log('sw installation done');
});

self.addEventListener('activate', function (e) {
    console.log('sw activatation done');
});

self.addEventListener('push', function (e) {
    console.log('push received');

    const promise = self.registration.showNotification('Hello', {
        body: 'Ca marche !!!'
    });
    e.waitUntil(promise);
});