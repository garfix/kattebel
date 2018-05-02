import React from 'react';

import {syncReminders } from "./reminder/sync";

self.registration.sync.register("sync-reminders");

self.addEventListener('sync', (event) => {
    if (event.tag === "sync-reminders") {
        event.waitUntil(syncReminders());


    }
});

console.log('SW started!');