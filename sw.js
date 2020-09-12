// use strict 
importScripts('sw-toolbox.js')
toolbox.precache([
        '/index.html',
        '/main.css',
        '/js/app.js',
        'sma.js',
        '/sw.js',
        '/img/bg.jpg',
        '/img/android-chrome-192x192.png',
        '/img/android-chrome-512x512.png',
        '/img/apple-touch-icon.png',
        '/img/favicon.ico',
        '/img/favicon-16x16.png',
        '/img/favicon-32x32.png',
        '/img/mstile-150x150.png',
        '/img/safari-pinned-tab.svg',
        '/img/icons/01d.png',
        '/img/icons/01n.png',
        '/img/icons/02d.png',
        '/img/icons/02n.png',
        '/img/icons/03d.png',
        '/img/icons/03n.png',
        '/img/icons/04d.png',
        '/img/icons/04n.png',
        '/img/icons/09d.png',
        '/img/icons/09n.png',
        '/img/icons/10d.png',
        '/img/icons/10n.png',
        '/img/icons/11d.png',
        '/img/icons/11n.png',
        '/img/icons/13d.png',
        '/img/icons/50n.png',
        '/img/icons/50d.png',
        '/img/icons/unknow.png',
        '/logo.svg',

    ])
    //toolbox
toolbox.router.get('/*', toolbox.networkFirst, {
    networkTimeoutSecond: 5
})