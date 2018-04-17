import { connectToDb } from "../model/db"

export function storeReminder(id, date, time, description)
{
    connectToDb().onsuccess = (event) => {

        let db = event.target.result;
        let transaction = db.transaction("reminders", "readwrite");

        transaction.onerror = () => {
            console.log("Error: ", event.target.error);
        };

        let store = transaction.objectStore("reminders");
        store.add({ id, date, time, description })
    }
}

export function getReminders()
{
    return new Promise((resolve) => {

        connectToDb().onsuccess = (event) => {

            let db = event.target.result;
            let transaction = db.transaction("reminders");

            transaction.onerror = () => {
                console.log("Error: ", event.target.error);
            };

            let store = transaction.objectStore("reminders");
            let cursor = store.openCursor();
            let reminders = [];

            cursor.onsuccess = (event) => {
                let cursor = event.target.result;

                if (!cursor) {
                    resolve(reminders);
                    return
                }

                let reminder = cursor.value;

                reminders.push(reminder);

                cursor.continue();
            };
        };
    });
}