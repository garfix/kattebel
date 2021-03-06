import {connectToDb, connectToObjectStore, REMINDERS} from "../model/db"

export function storeReminder(id, date, time, description)
{
    return new Promise((resolve, reject) => {

        connectToDb().then(db => {

            let store = connectToObjectStore(db, REMINDERS, "readwrite");
            let index = store.index("id_index");
            let cursor = index.openCursor(id);

            cursor.onsuccess = event => {

                let cursor = event.target.result;
                let object = {id, date, time, description};

                if (cursor) {
                    cursor.update(object)
                } else {
                    store.add(object)
                }

                // navigator.serviceWorker.ready.then(registration => {
                //     registration.sync.register("sync-reminders");
                // });

                resolve(object)
            };

        }).catch(error => reject(error));
    });
}

export function getReminder(id)
{
    return new Promise((resolve, reject) => {

        connectToDb().then(db => {

            let store = connectToObjectStore(db, REMINDERS, "readonly");
            let index = store.index("id_index");
            let cursor = index.openCursor(id);

            cursor.onsuccess = event => {

                let cursor = event.target.result;

                if (cursor) {
                    let reminder = cursor.value;
                    resolve(reminder);
                } else {
                    reject();
                }
            };

        }).catch(error => reject(error));
    });
}

export function getReminders(max = 10)
{
    return new Promise((resolve, reject) => {

        connectToDb().then(db => {

            let store = connectToObjectStore(db, REMINDERS, "readonly");
            let index = store.index("date_index");
            let cursor = index.openCursor(null, "prev");
            let reminders = [];

            cursor.onsuccess = event => {

                let cursor = event.target.result;

                if (!cursor || reminders.length === max) {
                    resolve(reminders);
                    return
                }

                reminders.push(cursor.value);
                cursor.continue();
            };

        }).catch(error => reject(error));
    });
}