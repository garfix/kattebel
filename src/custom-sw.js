import React from 'react';

import { syncReminders } from "./reminder/sync";

self.addEventListener('sync', (event) => {

    console.log("sync event!");

    if (event.tag === "sync-reminders") {
        event.waitUntil(syncReminders());
    }
});

console.log('Service worker started.');
