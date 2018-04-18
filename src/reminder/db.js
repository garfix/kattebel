import { connectToDb } from "../model/db"

export function storeReminder(id, date, time, description)
{
    connectToDb().onsuccess = (event) => {

        let db = event.target.result;
        let transaction = db.transaction("reminders", "readwrite");

        // transaction.onerror = () => {
        //     console.log("Error: ", event.target.error);
        // };

        let store = transaction.objectStore("reminders");
        let index = store.index("id_index");
        let cursor = index.openCursor(id);

        cursor.onsuccess = event => {

            let cursor = event.target.result;

            if (cursor) {
                cursor.update({ id, date, time, description })
            } else {
                store.add({ id, date, time, description })
            }
        };
    }
}

export function getReminder(id)
{
    return new Promise((resolve, reject) => {

        connectToDb().onsuccess = event => {

            let db = event.target.result;
            let transaction = db.transaction("reminders");

            transaction.onerror = () => {
                console.log("Error: ", event.target.error);
            };

            let store = transaction.objectStore("reminders");
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
        };
    });
}

export function getReminders()
{
    return new Promise(resolve => {

        connectToDb().onsuccess = event => {

            let db = event.target.result;
            let transaction = db.transaction("reminders");

            transaction.onerror = () => {
                console.log("Error: ", event.target.error);
            };

            let store = transaction.objectStore("reminders");
            let index = store.index("date_index");
            let cursor = index.openCursor(null, "prev");
            let reminders = [];

            cursor.onsuccess = event => {

                let cursor = event.target.result;

                if (!cursor || reminders.length === 10) {
                    resolve(reminders);
                    return
                }

                reminders.push(cursor.value);
                cursor.continue();
            };
        };
    });
}