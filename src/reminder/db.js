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