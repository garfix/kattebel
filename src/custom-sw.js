import React from 'react';

import { syncReminders } from "./reminder/sync";

console.log('Started #');

self.addEventListener('install', event => {

    const publicUrl = new URL(location).searchParams.get('path');

    // these files must be precached, because they are loaded before the service worker is activated
    let essentialFiles = [
        publicUrl + '/',
        publicUrl + '/catbell.png',
        publicUrl + '/static/media/logo.5d5d9eef.svg',
        publicUrl + '/static/css/main.91b8247b.css',
        publicUrl + '/static/js/main.d877cfb9.js', // production
        publicUrl + '/static/js/bundle.js', // development
        publicUrl + '/manifest.json'
    ];

    event.waitUntil(caches.open('kattebel').then(cache => {
        return cache.addAll(essentialFiles)
    }))
});

self.addEventListener('sync', (event) => {

    console.log("sync event!");

    if (event.tag === "sync-reminders") {
        event.waitUntil(syncReminders());
    }
});

self.addEventListener('fetch', event => {

    console.log(event.request.url);

    if (event.request.url.includes('sockjs-node')) {
        return fetch(event.request);
    }

    event.respondWith(
        caches.open('kattebel').then(cache => {

            console.log('1')

            return cache.match(event.request).then(cachedResponse => {

                console.log('2', cachedResponse)

                if (cachedResponse) {
                    return cachedResponse;
                } else {

                    console.log('3', event.request)

                    return fetch(event.request).then(networkResponse => {

                        console.log('4', networkResponse)

                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    })


                }
            });
        })
    )
});

console.log('Service worker started.');
